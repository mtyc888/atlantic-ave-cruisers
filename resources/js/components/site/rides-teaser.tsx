import { Link } from './router';
import { STOPS, WEEK_STOP } from './data';

export function RidesTeaser() {
    return (
        <section className="teaser teaser-navy">
            <div className="wrap">
                <div className="teaser-head" data-reveal>
                    <div>
                        <span className="label">Community rides</span>
                    </div>
                    <Link className="teaser-more" href="/join">
                        Join the club
                    </Link>
                </div>

                <div className="ride-preview">
                    <ul className="ride-stops" data-reveal>
                        {STOPS.map((s) => (
                            <li key={s.id} className={s.id === WEEK_STOP.id ? '' : ''}>
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
