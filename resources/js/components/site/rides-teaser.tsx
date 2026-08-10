import { Link } from '@inertiajs/react';
import { STOPS, WEEK_STOP } from './data';

export function RidesTeaser() {
    return (
        <section className="teaser teaser-navy">
            <div className="wrap">
                <div className="teaser-head" data-reveal>
                    <div>
                        <span className="label">Community rides</span>
                        <h2 className="h2">Every week, 6pm</h2>
                    </div>
                    <Link className="teaser-more" href="/join">
                        Join the club
                    </Link>
                </div>

                <div className="ride-preview">
                    <div className="ride-week" data-reveal>
                        <span className="label">This week</span>
                        <b>{WEEK_STOP.name}</b>
                        <p>{WEEK_STOP.note}</p>
                        <Link className="btn btn-gold" href="/join">
                            See the route
                        </Link>
                    </div>

                    <ul className="ride-stops" data-reveal>
                        {STOPS.map((s) => (
                            <li key={s.id} className={s.id === WEEK_STOP.id ? 'on' : ''}>
                                <span>{s.name}</span>
                                <em>{s.miles} mi</em>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
