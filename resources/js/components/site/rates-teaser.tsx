import { Link } from '@inertiajs/react';
import type { CSSProperties } from 'react';
import { FLEET } from './data';

export function RatesTeaser() {
    return (
        <section className="teaser teaser-cream" id="rentals">
            <div className="wrap">
                <div className="teaser-head" data-reveal>
                    <div>
                        <span className="label">Rentals</span>
                        <h2 className="h2">Choose your moped</h2>
                    </div>
                    <Link className="teaser-more" href="/rates">
                        See all rates
                    </Link>
                </div>

                <ul className="rate-list">
                    {FLEET.map((f, idx) => (
                        <li
                            key={f.id}
                            data-reveal
                            style={{ '--d': `${idx * 0.06}s` } as CSSProperties}
                        >
                            <Link href="/rates">
                                <span className="rl-name">
                                    {f.name}
                                    {f.popular && <b>Most popular</b>}
                                </span>
                                <span className="rl-spec">
                                    {f.engine} · {f.seats} {f.seats === 1 ? 'seat' : 'seats'}
                                </span>
                                <span className="rl-price">
                                    <b>${f.rates.hour}</b>
                                    <em>/ hour</em>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
