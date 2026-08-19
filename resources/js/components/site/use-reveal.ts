import { useUrl } from './router';
import { useEffect } from 'react';

/**
 * Fades in every [data-reveal] element as it scrolls into view.
 *
 * Keyed on the current url: the layout persists across client-side visits,
 * so a mount-only effect would never see the incoming page's elements and
 * they would stay stuck at opacity 0.
 */
export function useReveal() {
    const url = useUrl();

    useEffect(() => {
        const els = Array.from(document.querySelectorAll('[data-reveal]'));
        if (els.length === 0) return;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('is-in'));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-in');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [url]);
}
