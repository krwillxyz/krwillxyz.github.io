# Photo Gallery Setup

Drop final images for the `/photography` page into this folder.

Guidelines for best results:

1. **Resize for the web** – export images to a max width of 2000px (long edge). This keeps file sizes friendly while retaining detail on large screens.
2. **Use modern formats** – prefer `.jpg` (quality 80-85) or `.webp` (quality ~75). Avoid uncompressed PNGs unless the image is truly flat graphics.
3. **Name consistently** – use lowercase, hyphenated filenames like `studio-wall-2024.jpg`. The gallery is ordered alphabetically, newest first if you prefix filenames with dates.
4. **Add alt text** – the gallery auto-humanizes filenames (e.g., `studio-wall.jpg` → “Studio wall”). To override that, add an entry in `_data/photography.yml` with the filename and preferred alt string.
5. **Keep sizes lightweight** – aim for each file to be under 1&nbsp;MB when possible. If you need larger files, try running them through [Squoosh](https://squoosh.app/) or similar compression tools first.

Commit any added photos so they deploy with the site.
