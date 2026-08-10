import { useState } from 'react';
import { STOPS, THIS_WEEK, WEEK_STOP } from './data';
import { RidesMap } from './rides-map';
import { scrollToSection } from './scroll-to-section';

export function Rides() {
    const [active, setActive] = useState(THIS_WEEK);
    const current = STOPS.find((s) => s.id === active) ?? WEEK_STOP;

    return (
        <section className="rides" id="rides">
            <div className="wrap">
                <div className="rides-head" data-reveal>
                    <div>
                        <div className="label">Community rides</div>
                        <h2 className="h2">
                            Every week,
                            <br />
                            somewhere on this coast
                        </h2>
                    </div>
                    <p>
                        Group rides from Charlestown to Mystic. Pick a stop to see the run.
                        Riders on their own bikes are welcome.
                    </p>
                </div>

                <div className="chart" data-reveal>
                    <RidesMap active={active} onSelect={setActive} />

                    {/* Also the keyboard-accessible way to pick a stop: Leaflet's
                        circle markers are not focusable. */}
                    <div className="stoplist">
                        {STOPS.map((s) => (
                            <button
                                key={s.id}
                                className={s.id === active ? 'on' : ''}
                                aria-pressed={s.id === active}
                                onClick={() => setActive(s.id)}
                            >
                                {s.name}
                                <em>{s.miles} mi</em>
                            </button>
                        ))}
                    </div>

                    <div className="chart-detail">
                        <div className="cd-block">
                            <div className="cd-name">{current.name}</div>
                            <p className="cd-note">{current.note}</p>
                        </div>
                        <div>
                            <div className="cd-k">From the shop</div>
                            <div className="cd-v">{current.miles} mi</div>
                        </div>
                        <div>
                            <div className="cd-k">One way</div>
                            <div className="cd-v">{current.time}</div>
                        </div>
                    </div>
                </div>

                <div className="next" data-reveal>
                    <div>
                        <span className="label">This week</span>
                        <b>6pm · {WEEK_STOP.name}</b>
                    </div>
                    <button className="btn btn-gold" onClick={() => scrollToSection('#signup')}>
                        Join the club
                    </button>
                </div>
            </div>
        </section>
    );
}
