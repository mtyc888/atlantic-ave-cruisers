import { Link, useUrl } from './router';
import { useEffect, useState } from 'react';
import badge from './aac-badge.png';
import { NAV_LINKS, SHOP_MAP_URL } from './data';
import { SiteLink } from './site-link';

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const url = useUrl();
    const path = url.split('#')[0].split('?')[0];
    // Only the homepage has a hero for the nav to float over; every other page
    // starts with a content section, so the bar stays solid there.
    const solid = path !== '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close the mobile menu whenever a visit lands on a new page.
    useEffect(() => setMenuOpen(false), [url]);

    return (
        <header
            className={`nav ${solid || scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
        >
            <div className="wrap nav-in">
                <Link className="mark" href="/">
                    <img className="mark-badge" src={badge} alt="" aria-hidden="true" />
                    <span className="mark-txt">
                        <b>Atlantic Ave</b>
                        <i>Cruisers</i>
                    </span>
                </Link>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {NAV_LINKS.map((n) => (
                        <SiteLink
                            key={n.href}
                            href={n.href}
                            className={n.href === path ? 'on' : ''}
                            onNavigate={() => setMenuOpen(false)}
                        >
                            {n.label}
                        </SiteLink>
                    ))}
                </nav>

                <div className="nav-right">
                    {/* Walk-in shop, no reservations — send people straight to
                        directions rather than a booking flow. */}
                    <a
                        className="btn btn-gold"
                        href={SHOP_MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit the shop
                        <span className="sr-only"> (opens Google Maps in a new tab)</span>
                    </a>
                    <button
                        className="burger"
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i />
                        <i />
                        <i />
                    </button>
                </div>
            </div>
        </header>
    );
}
