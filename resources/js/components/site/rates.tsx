import type { CSSProperties } from 'react';
import { FLEET_FROM, RENTALS_COPY } from './data';

function Check() {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path
                d="M4 10.5 L8 14.5 L16 5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function Rates() {
    return (
        <section className="rates" id="rates">
            <div className="wrap">
                <header className="rates-head" data-reveal>
                    <span className="label">Rentals</span>
                    <h1 className="h2">{RENTALS_COPY.title}</h1>
                    <p className="rates-lede">{RENTALS_COPY.lede}</p>
                    <p className="rates-from">
                        From <b>${FLEET_FROM}</b> an hour
                    </p>
                </header>

                <ul className="perks">
                    {RENTALS_COPY.perks.map((perk, idx) => (
                        <li
                            key={perk}
                            data-reveal
                            style={{ '--d': `${idx * 0.06}s` } as CSSProperties}
                        >
                            <Check />
                            {perk}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
