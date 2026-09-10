import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A shared link primitive for the Laravel/Inertia and standalone static
 * builds. Native navigation lets Laravel resolve its Inertia pages, while
 * Vercel's static-site rewrite returns the React app for the same URLs.
 *
 * Keeping this in one place means the components are not tied to a specific
 * router; swapping again would only touch this file.
 */

type LinkProps = {
    href: string;
    className?: string;
    children: ReactNode;
    onClick?: () => void;
};

export function Link({ href, className, children, onClick }: LinkProps) {
    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
        </a>
    );
}

/** Path plus hash, matching what Inertia's usePage().url returned. */
export function useUrl(): string {
    const { pathname, hash } = useLocation();
    return pathname + hash;
}
