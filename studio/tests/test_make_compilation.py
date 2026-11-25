import os, shutil, subprocess, sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "tools"))
import make_compilation as mc  # noqa: E402

pytestmark = pytest.mark.skipif(not shutil.which("ffmpeg") or not os.path.exists(mc.DEFAULT_FONT),
                                reason="needs ffmpeg and the default font")


def _src(path, audio=True):
    cmd = ["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "testsrc=size=640x480:rate=30:duration=4"]
    if audio:
        cmd += ["-f", "lavfi", "-i", "sine=frequency=440:duration=4", "-shortest"]
    subprocess.run(cmd + [path], check=True)
    return path


def test_compilation_video_thumbnail_and_chapters(tmp_path):
    a, b = _src(str(tmp_path / "a.mp4")), _src(str(tmp_path / "b.mp4"), audio=False)
    out = tmp_path / "out"
    info = mc.make({"out_dir": str(out), "thumb_text": "WEIRD TOYS", "clips": [
        {"src": a, "start": 0, "end": 3, "label": "Toy one · 1955", "item": "https://archive.org/details/a"},
        {"src": b, "start": 1, "end": 3, "label": "Toy two · 1961", "item": "https://archive.org/details/b"}]})
    assert (info["width"], info["height"]) == (1920, 1080)
    assert abs(info["duration"] - (3 + 2 + mc.END_CARD)) < 0.3
    assert info["audio"]
    chapters = (out / "chapters.txt").read_text(encoding="utf-8")
    assert "0:00 Toy one · 1955" in chapters and "0:03 Toy two · 1961" in chapters
    assert "https://archive.org/details/b" in chapters
    assert (out / "thumbnail.jpg").stat().st_size > 0


def test_stamp():
    assert mc.stamp(0) == "0:00" and mc.stamp(754) == "12:34" and mc.stamp(3725) == "1:02:05"
