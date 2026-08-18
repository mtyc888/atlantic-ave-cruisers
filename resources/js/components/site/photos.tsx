import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { PhotoSlot } from './photo-slot';

/**
 * Every image in ./gallery is picked up automatically — adding or removing a
 * photograph needs no code change. Vite fingerprints each file at build time.
 *
 * The filename becomes the alt text ("watch-hill-sunset.jpg" reads as
 * "Watch hill sunset"), so name files descriptively.
 *
 * Laid out as masonry columns, so portrait and landscape shots can sit side
 * by side and each keeps its own proportions — nothing is cropped.
 */
const FILES = import.meta.glob('./gallery/*.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>;

/**
 * Filenames (without extension) to pin to the front, in this order.
 * Anything not listed follows in a random order.
 */
const PINNED = ['pic1', 'pic2'];

const ALL = Object.entries(FILES).map(([path, src]) => {
    const stem = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
    const words = stem
        .replace(/^\d+[-_\s]*/, '') // drop any ordering prefix
        .replace(/[-_]+/g, ' ')
        .trim();

    return {
        stem: stem.toLowerCase(),
        src,
        alt: words ? words.charAt(0).toUpperCase() + words.slice(1) : 'Atlantic Ave Cruisers',
    };
});

/** Fisher–Yates, run once at module load so the order holds while browsing. */
function shuffled<T>(items: T[]): T[] {
    const out = items.slice();
    for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
}

const pinned = PINNED.flatMap((name) => {
    const hit = ALL.find((p) => p.stem === name);
    return hit ? [hit] : [];
});

const PHOTOS = [...pinned, ...shuffled(ALL.filter((p) => !PINNED.includes(p.stem)))];

/** Keeps the page laid out until real photographs land in ./gallery. */
const PLACEHOLDERS = Array.from({ length: 9 }, (_, i) => ({
    src: null as string | null,
    alt: `Gallery photo ${i + 1}`,
}));

/**
 * Column count, matched to the breakpoints in site.css — the two must agree,
 * or the grid ends up with a different number of tracks than there are
 * columns and the reading order breaks.
 *
 * One column on phones: two columns of portrait shots leaves each about
 * 150px wide, which is a thumbnail rather than a photograph.
 */
function columnsFor(width: number) {
    if (width >= 961) return 3;
    if (width >= 561) return 2;
    return 1;
}

function useColumnCount() {
    // Read the real width on the first render so the layout does not flash
    // three columns before settling on a phone.
    const [cols, setCols] = useState(() =>
        typeof window === 'undefined' ? 3 : columnsFor(window.innerWidth),
    );

    useEffect(() => {
        const sync = () => setCols(columnsFor(window.innerWidth));

        sync();
        window.addEventListener('resize', sync);
        return () => window.removeEventListener('resize', sync);
    }, []);

    return cols;
}

export function Photos() {
    const items = PHOTOS.length ? PHOTOS : PLACEHOLDERS;
    const cols = useColumnCount();

    // Dealt across the columns rather than poured down them, so reading order
    // runs left to right: the first photo heads column one, the second heads
    // column two, and so on. CSS multi-column would stack them vertically.
    const columns: (typeof items)[] = Array.from({ length: cols }, () => []);
    items.forEach((photo, i) => columns[i % cols].push(photo));

    return (
        <section className="photos" id="photos">
            <div className="wrap">
                <div className="photos-head" data-reveal>
                    <span className="label">Gallery</span>
                    <h2 className="h2">Out on the road</h2>
                </div>

                <div className="gal">
                    {columns.map((column, ci) => (
                        <div className="gal-col" key={ci}>
                            {column.map((p, ri) => (
                                <figure
                                    key={p.src ?? `${ci}-${ri}`}
                                    className={`gal-cell ${p.src ? '' : 'is-empty'}`}
                                    data-reveal
                                    style={{ '--d': `${ci * 0.07}s` } as CSSProperties}
                                >
                                    <PhotoSlot src={p.src} alt={p.alt} />
                                </figure>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
