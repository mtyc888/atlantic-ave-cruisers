import type { ReactNode } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

/**
 * Thin shim over react-router so the site components keep the same call
 * signature they used under Inertia — `href` rather than `to`, and a single
 * `useUrl()` for anything that needs the current location.
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
        <RouterLink to={href} className={className} onClick={onClick}>
            {children}
        </RouterLink>
    );
}

/** Path plus hash, matching what Inertia's usePage().url returned. */
export function useUrl(): string {
    const { pathname, hash } = useLocation();
    return pathname + hash;
}
