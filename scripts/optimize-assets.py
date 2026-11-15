"""Run with imageio-ffmpeg, fonttools and brotli installed; requires cwebp."""
from pathlib import Path
import subprocess
import imageio_ffmpeg
from fontTools import subset
root = Path(__file__).resolve().parent.parent
media = root / 'assets/media'
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
for number in range(1, 5):
    subprocess.run(['cwebp', '-quiet', '-q', '82', '-resize', '1000', '0', str(media / f'{number}.png'), '-o', str(media / f'{number}.webp')], check=True)
for name, width, crf in [('hero-desktop.mp4', 1280, 27), ('hero-mobile.mp4', 720, 29)]:
    subprocess.run([ffmpeg, '-y', '-i', str(media / 'top_video.mp4'), '-an', '-vf', f'scale={width}:-2,fps=24', '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf), '-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(media / name)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
subprocess.run([ffmpeg, '-y', '-ss', '0.2', '-i', str(media / 'top_video.mp4'), '-frames:v', '1', '-vf', 'scale=1280:-2', '-c:v', 'libwebp', '-quality', '80', str(media / 'hero-poster.webp')], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
# Retain every character in the pages and translations, plus Latin and punctuation.
text = ''.join(p.read_text() for p in root.glob('*.html')) + (root / 'language.js').read_text()
options = subset.Options()
options.flavor = 'woff2'
font = subset.load_font(str(root / 'assets/fonts/PretendardVariable.woff2'), options)
subsetter = subset.Subsetter(options=options)
subsetter.populate(text=text, unicodes=list(range(32, 256)))
subsetter.subset(font)
subset.save_font(font, str(root / 'assets/fonts/Pretendard-site.woff2'), options)
