import { Link } from '@inertiajs/react';
import type { CSSProperties } from 'react';
import { FLEET } from './data';
import { PhotoSlot } from './photo-slot';

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
                        See the fleet and rates
                    </Link>
                </div>

                <div className="fleet-grid">
                    {FLEET.map((f, idx) => (
                        <Link
                            key={f.id}
                            href="/rates"
                            className={`fleet-card is-link ${f.popular ? 'is-popular' : ''}`}
                            data-reveal
                            style={{ '--d': `${idx * 0.07}s` } as CSSProperties}
                        >
                            <div className="fleet-media">
                                <PhotoSlot src={f.src} alt={`${f.name}, ${f.engine} moped`} />
                                {f.popular && <span className="fleet-flag">Most booked</span>}
                            </div>

                            <div className="fleet-body">
                                <div className="fleet-title">
                                    <h3>{f.name}</h3>
                                    <span className="fleet-engine">{f.engine}</span>
                                </div>
                                <p className="fleet-tagline">{f.tagline}</p>
                                <div className="fleet-price">
                                    <b>${f.rates.hour}</b>
                                    <span>/ hour</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
