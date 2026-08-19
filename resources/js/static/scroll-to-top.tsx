import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A client-side router keeps the scroll position between pages, which is
 * disorienting — land at the top unless the url points at a section.
 */
export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) return; // useHashScroll handles those
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, [pathname, hash]);

    return null;
}
