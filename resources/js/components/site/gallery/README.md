# Gallery photographs

Drop image files into this folder. They are picked up automatically by
`photos.tsx` via `import.meta.glob` — no code change needed to add, remove or
swap one.

Accepted: `.jpg` `.jpeg` `.png` `.webp` `.avif`

**Orientation doesn't matter.** The gallery is a masonry layout, so portrait
and landscape shots sit side by side and each keeps its own proportions.
Nothing is cropped.

**Order:** `pic1` and `pic2` are pinned to the front, in that order. Everything
else follows shuffled, reshuffling on each page load. To pin different photos,
edit the `PINNED` list at the top of `../photos.tsx` — names go without the
file extension.

**Filename becomes the alt text** — `watch-hill-sunset.jpg` reads as
"Watch hill sunset" to screen readers. A leading number is stripped. Nothing
is shown on screen, so this is purely for accessibility and search.

**Size:** columns are roughly 350px wide, so ~800–1200px on the long edge
covers retina. Photos straight off a phone (4000px+) will bloat the page for
no visible gain — resize first.
