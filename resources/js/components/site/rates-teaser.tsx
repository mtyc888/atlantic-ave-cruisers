import { Link } from '@inertiajs/react';
import type { CSSProperties } from 'react';
import { FLEET_ENGINE, FLEET_SIZE, RATES } from './data';

export function RatesTeaser() {
    return (
        <section className="teaser teaser-cream" id="rentals">
            <div className="wrap">
                <div className="teaser-head" data-reveal>
                    <div>
                        <span className="label">Rentals</span>
                        <h2 className="h2">By the hour or all day</h2>
                    </div>
                    <Link className="teaser-more" href="/rates">
                        See all rates
                    </Link>
                </div>

                <ul className="rate-list">
                    {RATES.map((r, idx) => (
                        <li
                            key={r.id}
                            data-reveal
                            style={{ '--d': `${idx * 0.05}s` } as CSSProperties}
                        >
                            <Link href="/rates">
                                <span className="rl-name">{r.label}</span>
                                <span className="rl-price">
                                    <b>${r.price}</b>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className="rate-list-note" data-reveal>
                    {FLEET_SIZE} mopeds in the fleet, all {FLEET_ENGINE} and automatic.
                </p>
            </div>
        </section>
    );
}
