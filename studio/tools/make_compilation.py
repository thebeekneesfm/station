"""Makes a YouTube compilation (1920 x 1080) of vintage commercials, ready for the Director to upload.

  python studio/tools/make_compilation.py spec.json

spec.json:
  {"out_dir": "C:/Users/.../Videos/Bee's Knees YouTube/2026-12-01 weird toys",
   "thumb_text": "WEIRD 1950s TOYS", "thumb_clip": 2,
   "clips": [{"src": "<archive.org download URL or file>", "start": 0, "end": 58.5,
              "label": "Stopette deodorant · 1953", "item": "https://archive.org/details/..."}, ...]}

Each commercial plays whole (or start to end), centred on black, with its label in plain white text in
the lower-left corner; audio levelled to -14 LUFS. A 5-second end card says where to watch more.
Writes video.mp4, thumbnail.jpg (1280 x 720, a real frame with plain text) and chapters.txt (YouTube
chapters plus the Archive credits) into out_dir, and prints the length and size.
Needs ffmpeg and ffprobe on the PATH."""
import json, os, subprocess, sys, tempfile

sys.path.insert(0, os.path.dirname(__file__))
from make_clip import DEFAULT_FONT, ff_path, probe  # noqa: E402

W, H, END_CARD = 1920, 1080, 5
BOLD = DEFAULT_FONT.replace("arial.ttf", "arialbd.ttf")
ENC = ["-c:v", "libx264", "-preset", "medium", "-crf", "20", "-r", "30", "-pix_fmt", "yuv420p",
       "-c:a", "aac", "-b:a", "160k", "-ar", "48000", "-ac", "2"]


def _text(s):
    f = tempfile.NamedTemporaryFile("w", suffix=".txt", delete=False, encoding="utf-8", newline="\n")
    f.write(s)
    f.close()
    return f.name


def stamp(t):
    t = int(t)
    return f"{t // 3600}:{t % 3600 // 60:02d}:{t % 60:02d}" if t >= 3600 else f"{t // 60}:{t % 60:02d}"


def segment(clip, out):
    info = probe(clip["src"])
    label = _text(clip["label"])
    vf = (f"scale={W}:{H}:force_original_aspect_ratio=decrease,pad={W}:{H}:(ow-iw)/2:(oh-ih)/2:black,"
          f"drawtext=fontfile='{ff_path(DEFAULT_FONT)}':textfile='{ff_path(label)}':fontcolor=white:fontsize=38:"
          f"box=1:boxcolor=black@0.55:boxborderw=14:x=48:y=h-text_h-56")
    dur = clip["end"] - clip.get("start", 0)
    cmd = ["ffmpeg", "-v", "error", "-y", "-ss", str(clip.get("start", 0)), "-t", str(dur), "-i", clip["src"]]
    if info["audio"]:
        cmd += ["-vf", vf, "-af", "loudnorm=I=-14:TP=-1.5:LRA=11"]
    else:  # silent film: add silence so every segment has the same streams
        cmd += ["-f", "lavfi", "-t", str(dur), "-i", "anullsrc=r=48000:cl=stereo", "-vf", vf, "-map", "0:v", "-map", "1:a"]
    try:
        subprocess.run(cmd + ENC + [out], check=True)
    finally:
        os.unlink(label)
    return probe(out)["duration"]


def end_card(out):
    t = _text("Hundreds more vintage commercials, free\nthebeesknees.fm")
    vf = (f"drawtext=fontfile='{ff_path(DEFAULT_FONT)}':textfile='{ff_path(t)}':fontcolor=white:fontsize=60:"
          f"line_spacing=20:text_align=C:x=(w-text_w)/2:y=(h-text_h)/2")
    try:
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", f"color=black:s={W}x{H}:r=30:d={END_CARD}",
                        "-f", "lavfi", "-t", str(END_CARD), "-i", "anullsrc=r=48000:cl=stereo", "-vf", vf] + ENC + [out], check=True)
    finally:
        os.unlink(t)


def thumbnail(src, at, text, out):
    t = _text(text)
    vf = (f"scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,"
          f"drawtext=fontfile='{ff_path(BOLD)}':textfile='{ff_path(t)}':fontcolor=white:fontsize=96:"
          f"box=1:boxcolor=black@0.7:boxborderw=24:text_align=C:x=(w-text_w)/2:y=h-text_h-60")
    try:
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(at), "-i", src, "-frames:v", "1", "-vf", vf, "-q:v", "2", out], check=True)
    finally:
        os.unlink(t)


def make(spec):
    out_dir, clips = spec["out_dir"], spec["clips"]
    if not clips:
        sys.exit("no clips")
    os.makedirs(out_dir, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        parts, chapters, credits, t = [], [], [], 0.0
        for i, c in enumerate(clips):
            p = os.path.join(tmp, f"{i:03d}.mp4")
            chapters.append(f"{stamp(t)} {c['label']}")
            credits.append(f"{c['label']}: {c.get('item', c['src'])}")
            t += segment(c, p)
            parts.append(p)
        end = os.path.join(tmp, "end.mp4")
        end_card(end)
        parts.append(end)
        lst = os.path.join(tmp, "list.txt")
        with open(lst, "w", encoding="utf-8", newline="\n") as f:
            f.write("".join(f"file '{p.replace(os.sep, '/')}'\n" for p in parts))
        video = os.path.join(out_dir, "video.mp4")
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-c", "copy",
                        "-movflags", "+faststart", video], check=True)
    k = spec.get("thumb_clip", 0)
    tc = clips[k]
    thumbnail(tc["src"], tc.get("start", 0) + (tc["end"] - tc.get("start", 0)) / 2,
              spec.get("thumb_text", ""), os.path.join(out_dir, "thumbnail.jpg"))
    with open(os.path.join(out_dir, "chapters.txt"), "w", encoding="utf-8", newline="\n") as f:
        f.write("Chapters\n" + "\n".join(chapters) + "\n\nFrom the Internet Archive\n" + "\n".join(credits) + "\n")
    return probe(video)


if __name__ == "__main__":
    print(json.dumps(make(json.load(open(sys.argv[1], encoding="utf-8")))))
