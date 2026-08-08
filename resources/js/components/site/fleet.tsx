import type { CSSProperties } from 'react';
import { useState } from 'react';
import { DURATIONS, FLEET, type DurationId } from './data';
import { PhotoSlot } from './photo-slot';
import { scrollToSection } from './scroll-to-section';

/** Hourly-equivalent hours in each block, used for the full-day saving hint. */
const HOURS_IN = { hour: 1, half: 4, full: 8 } as const;

export function Fleet() {
    const [duration, setDuration] = useState<DurationId>('half');
    const active = DURATIONS.find((d) => d.id === duration) ?? DURATIONS[0];

    return (
        <section className="fleet" id="fleet">
            <div className="wrap">
                <div className="fleet-head" data-reveal>
                    <div>
                        <span className="label">The fleet</span>
                        <h2 className="h2">Pick your ride</h2>
                        <p>
                            Every moped is automatic, serviced weekly, and fuelled before you
                            arrive. Prices are per moped for a {active.detail.toLowerCase()} block.
                        </p>
                    </div>

                    <div
                        className="seg"
                        role="group"
                        aria-label="Rental length"
                    >
                        {DURATIONS.map((d) => (
                            <button
                                key={d.id}
                                className={d.id === duration ? 'on' : ''}
                                aria-pressed={d.id === duration}
                                onClick={() => setDuration(d.id)}
                            >
                                {d.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="fleet-grid">
                    {FLEET.map((f, idx) => {
                        const price = f.rates[duration];
                        const saving = f.rates.hour * HOURS_IN[duration] - price;

                        return (
                            <article
                                key={f.id}
                                className={`fleet-card ${f.popular ? 'is-popular' : ''}`}
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

                                    <dl className="fleet-specs">
                                        <div>
                                            <dt>Seats</dt>
                                            <dd>{f.seats}</dd>
                                        </div>
                                        <div>
                                            <dt>Top speed</dt>
                                            <dd>{f.topSpeed}</dd>
                                        </div>
                                        <div>
                                            <dt>Storage</dt>
                                            <dd>{f.storage}</dd>
                                        </div>
                                    </dl>

                                    <div className="fleet-foot">
                                        <div className="fleet-price">
                                            <b>${price}</b>
                                            <span>/ {active.label.toLowerCase()}</span>
                                            {saving > 0 && (
                                                <em>Saves ${saving} vs hourly</em>
                                            )}
                                        </div>

                                        <div className="fleet-stock">
                                            {f.count} in the fleet
                                        </div>

                                        <button
                                            className="btn btn-gold"
                                            onClick={() => scrollToSection('#join')}
                                        >
                                            Book the {f.name.replace(/^The /, '').toLowerCase()}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
