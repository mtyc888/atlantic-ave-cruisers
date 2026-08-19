import { Link } from './router';
import { useEffect, useRef } from 'react';
import badge from './no-background-logo.jpeg';
import { scrollToSection } from './scroll-to-section';

export function Hero() {
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const y = window.scrollY;
                if (badgeRef.current) {
                    badgeRef.current.style.transform = `rotate(${y * 0.06}deg) translateY(${y * 0.12}px)`;
                }
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section className="hero" id="top">
            <div className="wrap hero-in">
                <div className="hero-copy">
                    <div className="label">Moped rentals · Westerly, Rhode Island</div>
                    <h1>
                        Ride. Rent.
                        <br />
                        Explore. <span>Connect.</span>
                    </h1>
                    <p>
                        Hourly, half day, and full day rentals on the Rhode Island shoreline.
                        Helmets included. Community ride every week.
                    </p>
                    <div className="hero-cta">
                        <Link className="btn btn-gold" href="/rates">
                            Rent a moped
                        </Link>
                        <Link className="btn btn-outline" href="/join">
                            Join a ride
                        </Link>
                    </div>
                </div>
                <div className="hero-badge">
                    <div className="hero-badge-spin" ref={badgeRef}>
                        <img src={badge} alt="Atlantic Ave Cruisers badge" />
                    </div>
                </div>
            </div>
            <button className="hero-scroll" onClick={() => scrollToSection('#rentals')}>
                Scroll
                <i />
            </button>
        </section>
    );
}
