"""Makes a vertical social clip in the station's house style (the look of the best-performing posts):
the clip centred on a blurred, darkened copy of itself, with one or two lines of plain white text above.
No effects, no zooms, no stickers: it should look like a person trimmed a commercial, not like AI.

  python studio/tools/make_clip.py --src <archive.org download URL or file> --start 12.5 --end 26 \
      --text "Stopette spray deodorant|TV commercial, 1953" --out clip.mp4

--text: lines separated by "|". --font: a .ttf (default Arial). Audio is levelled to -14 LUFS.
Prints the finished file's width, height, length and size, so the Editor can check them.
Needs ffmpeg and ffprobe on the PATH."""
import argparse, json, os, subprocess, sys, tempfile

W, H = 1080, 1920
DEFAULT_FONT = "C:/Windows/Fonts/arial.ttf" if os.name == "nt" else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"


def probe(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "stream=codec_type,width,height:format=duration,size",
                          "-of", "json", path], capture_output=True, text=True, check=True).stdout
    d = json.loads(out)
    v = next(s for s in d["streams"] if s["codec_type"] == "video")
    return {"width": v["width"], "height": v["height"], "duration": round(float(d["format"]["duration"]), 2),
            "size_mb": round(int(d["format"]["size"]) / 1048576, 1),
            "audio": any(s["codec_type"] == "audio" for s in d["streams"])}


def ff_path(p):
    # drawtext's fontfile/textfile need forward slashes and an escaped drive colon on Windows
    return p.replace("\\", "/").replace(":", "\\:")


def make(src, start, end, text, out, font=DEFAULT_FONT):
    if end <= start:
        sys.exit("--end must be after --start")
    src_info = probe(src)
    fg_h = round(W * src_info["height"] / src_info["width"] / 2) * 2   # source scaled to full width
    fg_top = (H - fg_h) // 2
    with tempfile.NamedTemporaryFile("w", suffix=".txt", delete=False, encoding="utf-8", newline="\n") as f:
        f.write(text.replace("|", "\n"))
        textfile = f.name
    vf = (f"[0:v]split[a][b];"
          f"[a]scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},boxblur=40:2,eq=brightness=-0.22[bg];"
          f"[b]scale={W}:{fg_h}[fg];"
          f"[bg][fg]overlay=0:{fg_top},"
          f"drawtext=fontfile='{ff_path(font)}':textfile='{ff_path(textfile)}':fontcolor=white:fontsize=64:"
          f"line_spacing=14:text_align=C:x=(w-text_w)/2:y={fg_top}-text_h-70,fps=30,format=yuv420p[v]")
    cmd = ["ffmpeg", "-v", "error", "-y", "-ss", str(start), "-t", str(end - start), "-i", src,
           "-filter_complex", vf, "-map", "[v]"]
    if src_info["audio"]:
        cmd += ["-map", "0:a:0", "-af", "loudnorm=I=-14:TP=-1.5:LRA=11", "-c:a", "aac", "-b:a", "160k", "-ar", "48000"]
    cmd += ["-c:v", "libx264", "-preset", "medium", "-crf", "20", "-movflags", "+faststart", out]
    try:
        subprocess.run(cmd, check=True)
    finally:
        os.unlink(textfile)
    return probe(out)


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--src", required=True)
    ap.add_argument("--start", type=float, required=True)
    ap.add_argument("--end", type=float, required=True)
    ap.add_argument("--text", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--font", default=DEFAULT_FONT)
    a = ap.parse_args()
    print(json.dumps(make(a.src, a.start, a.end, a.text, a.out, a.font)))
