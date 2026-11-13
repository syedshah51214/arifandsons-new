#!/usr/bin/env python3
"""Shrink site photos so pages load quickly.

Run from the project root after adding new photos:
    python3 scripts/optimize_images.py

- Photos in src/assets/Services are converted to WebP (max 1400px) in place.
- A small copy (max 560px) of each is written to src/assets/thumbs for grids.
- Team photos, client logos and the CEO photo are resized and converted too.
Needs Pillow:  pip install Pillow
"""
import os
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent / 'src' / 'assets'
EXTS = {'.jpg', '.jpeg', '.png', '.webp'}


def save(im, dest, max_side, quality):
    im = ImageOps.exif_transpose(im)
    has_alpha = im.mode in ('RGBA', 'LA', 'P')
    im = im.convert('RGBA' if has_alpha else 'RGB')
    im.thumbnail((max_side, max_side), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, 'WEBP', quality=quality, method=6)


def convert_folder(folder, max_side, quality, thumbs=None):
    for src in sorted(folder.rglob('*')):
        if src.suffix.lower() not in EXTS or not src.is_file():
            continue
        dest = src.with_suffix('.webp')
        thumb = thumbs / src.relative_to(folder).with_suffix('.webp') if thumbs else None
        with Image.open(src) as im:
            im.load()
            if thumb and not thumb.exists():
                save(im, thumb, 560, 68)
            if src.suffix.lower() != '.webp':
                save(im, dest, max_side, quality)
        if src.suffix.lower() != '.webp':
            os.remove(src)
            print('optimized', src.relative_to(ROOT))


convert_folder(ROOT / 'Services', 1400, 74, thumbs=ROOT / 'thumbs' / 'Services')
convert_folder(ROOT / 'Team', 420, 76)
convert_folder(ROOT / 'Our Clients', 260, 82)
ceo = ROOT / 'CEO.jpg'
if ceo.exists():
    with Image.open(ceo) as im:
        save(im, ROOT / 'CEO.webp', 900, 78)
    os.remove(ceo)
