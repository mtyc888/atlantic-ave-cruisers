import { useEffect } from 'react';

const SITE = 'Atlantic Ave Cruisers';

/**
 * Sets the document title per page. Replaces Inertia's <Head>.
 *
 * Note this runs in the browser, so it is not what a link-preview crawler
 * reads — those use the static tags in index.html.
 */
export function useTitle(title?: string) {
    useEffect(() => {
        document.title = title ? `${title} - ${SITE}` : SITE;
    }, [title]);
}
