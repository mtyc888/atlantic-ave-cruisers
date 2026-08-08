import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import badge from './aac-badge.png';
import { NAV_LINKS } from './data';
import { SiteLink } from './site-link';

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { url } = usePage();
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
                    <Link className="btn btn-gold" href="/rates">
                        Book a moped
                    </Link>
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
