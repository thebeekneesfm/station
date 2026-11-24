"""Point the studio tools at a throwaway copy of the fixture site (outside git) before they load."""
import os
import shutil
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
SITE = Path(tempfile.mkdtemp(prefix="beesknees-site-")) / "site"
shutil.copytree(HERE / "fixtures" / "site", SITE)
os.environ["BEESKNEES_REPO"] = str(SITE)
sys.path.insert(0, str(HERE.parent / "tools"))
