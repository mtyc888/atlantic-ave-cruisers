import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { scrollToSection } from './scroll-to-section';

/**
 * Scrolls to the target section when a url carries a hash (e.g. "/#photos").
 *
 * Inertia swaps the page client-side, so the browser never performs its own
 * fragment jump. Runs after paint so the incoming section is laid out.
 */
export function useHashScroll() {
    const { url } = usePage();

    useEffect(() => {
        const hash = url.slice(url.indexOf('#'));
        if (!url.includes('#') || hash.length < 2) return;

        const raf = requestAnimationFrame(() => scrollToSection(hash));
        return () => cancelAnimationFrame(raf);
    }, [url]);
}
