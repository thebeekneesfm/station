import os, shutil, subprocess, sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "tools"))
import make_clip  # noqa: E402

pytestmark = pytest.mark.skipif(not shutil.which("ffmpeg") or not os.path.exists(make_clip.DEFAULT_FONT),
                                reason="needs ffmpeg and the default font")


def test_makes_vertical_clip_of_the_right_length(tmp_path):
    src = str(tmp_path / "src.mp4")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "testsrc=size=640x480:rate=30:duration=6",
                    "-f", "lavfi", "-i", "sine=frequency=440:duration=6", "-shortest", src], check=True)
    out = str(tmp_path / "out.mp4")
    info = make_clip.make(src, 1, 4.5, "Test product|TV commercial, 1955", out)
    assert (info["width"], info["height"]) == (1080, 1920)
    assert abs(info["duration"] - 3.5) < 0.15
    assert info["audio"]


def test_rejects_end_before_start(tmp_path):
    with pytest.raises(SystemExit):
        make_clip.make("unused", 5, 2, "x", str(tmp_path / "o.mp4"))
