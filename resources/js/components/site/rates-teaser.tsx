import { Link } from './router';
import type { CSSProperties } from 'react';
import { FLEET_ENGINE, FLEET_SIZE, RATES } from './data';

export function RatesTeaser() {
    return (
        <section className="teaser teaser-cream" id="tours">
            <div className="wrap">
                <div className="teaser-head" data-reveal>
                    <div>
                        <span className="label">Moped tours</span>
                        <h2 className="h2">See the coast by moped</h2>
                    </div>
                    <Link className="teaser-more" href="/rates">
                        View tour details
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
                    {FLEET_SIZE} automatic {FLEET_ENGINE} mopeds on every tour. Helmets included.
                </p>
            </div>
        </section>
    );
}
