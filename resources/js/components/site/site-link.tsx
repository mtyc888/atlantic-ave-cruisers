import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { scrollToSection } from './scroll-to-section';

type SiteLinkProps = {
    href: string;
    className?: string;
    children: ReactNode;
    onNavigate?: () => void;
};

/**
 * Renders an in-page scroll button for "#anchor" hrefs and an Inertia visit
 * for everything else, so NAV_LINKS and the footer can mix the two freely.
 */
export function SiteLink({ href, className, children, onNavigate }: SiteLinkProps) {
    if (href.startsWith('#')) {
        return (
            <button
                type="button"
                className={className}
                onClick={() => {
                    onNavigate?.();
                    scrollToSection(href);
                }}
            >
                {children}
            </button>
        );
    }

    return (
        <Link href={href} className={className} onClick={() => onNavigate?.()}>
            {children}
        </Link>
    );
}
