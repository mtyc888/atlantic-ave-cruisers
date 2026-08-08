import { CSSProperties } from 'react';
import { REASONS } from './data';

export function Why() {
    return (
        <section className="why">
            <div className="wrap">
                <span className="label" data-reveal>
                    Why ride with us
                </span>
                <div className="why-grid">
                    {REASONS.map((r, idx) => (
                        <div key={r.title} data-reveal style={{ '--d': `${idx * 0.08}s` } as CSSProperties}>
                            <h3>{r.title}</h3>
                            <p>{r.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
