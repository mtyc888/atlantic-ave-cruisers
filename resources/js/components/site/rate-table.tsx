import type { CSSProperties } from 'react';
import { DURATIONS, FLEET } from './data';
import { scrollToSection } from './scroll-to-section';

/**
 * Every moped against every rental length. Rendered as a real <table> so the
 * price/duration relationship survives for screen readers; the CSS restacks it
 * into per-moped blocks on narrow screens.
 */
export function RateTable() {
    return (
        <section className="ratetable" id="fleet">
            <div className="wrap">
                <div className="ratetable-head" data-reveal>
                    <div>
                        <span className="label">The fleet</span>
                        <h2 className="h2">Rates by moped</h2>
                    </div>
                    <p>
                        Every moped is automatic, serviced weekly, and fuelled before you arrive.
                        Prices are per moped and include a helmet and lock.
                    </p>
                </div>

                <div className="ratetable-wrap" data-reveal>
                    <table>
                        <caption className="sr-only">
                            Rental rates for each moped by rental length
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col">Moped</th>
                                {DURATIONS.map((d) => (
                                    <th scope="col" key={d.id}>
                                        {d.label}
                                        <em>{d.detail}</em>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {FLEET.map((f, idx) => (
                                <tr
                                    key={f.id}
                                    className={f.popular ? 'is-popular' : ''}
                                    style={{ '--d': `${idx * 0.05}s` } as CSSProperties}
                                >
                                    <th scope="row">
                                        <span className="rt-name">
                                            {f.name}
                                            {f.popular && <b>Most popular</b>}
                                        </span>
                                        <span className="rt-spec">
                                            {f.engine} · {f.seats} {f.seats === 1 ? 'seat' : 'seats'}{' '}
                                            · {f.topSpeed} · {f.count} in the fleet
                                        </span>
                                    </th>
                                    {DURATIONS.map((d) => (
                                        <td key={d.id} data-label={d.label}>
                                            ${f.rates[d.id]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="ratetable-foot" data-reveal>
                    <span className="label">
                        First come, first served. Groups welcome, just ask.
                    </span>
                    <button className="btn btn-gold" onClick={() => scrollToSection('#visit')}>
                        Find the shop
                    </button>
                </div>
            </div>
        </section>
    );
}
