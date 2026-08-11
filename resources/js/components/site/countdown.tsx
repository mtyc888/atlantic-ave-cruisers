import { useEffect, useState } from 'react';
import { OPENING_DAY, OPENING_LABEL } from './data';

const UNITS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

function remaining(from: number) {
    const secs = Math.max(0, Math.floor((OPENING_DAY.getTime() - from) / 1000));
    return [
        Math.floor(secs / 86400),
        Math.floor((secs % 86400) / 3600),
        Math.floor((secs % 3600) / 60),
        secs % 60,
    ];
}

export function Countdown() {
    // null until mounted: the server has no clock for this, and rendering a
    // time on the server would only hydrate to a different one a tick later.
    const [now, setNow] = useState<number | null>(null);

    useEffect(() => {
        setNow(Date.now());
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);

    const open = now !== null && now >= OPENING_DAY.getTime();
    const values = now === null ? null : remaining(now);

    return (
        <section className="countdown">
            <div className="wrap countdown-in">
                <div className="countdown-copy" data-reveal>
                    <span className="label">{open ? 'Now open' : 'Counting down to'}</span>
                    <h2>{open ? "We're open" : 'Opening day'}</h2>
                    <p className="countdown-date">{OPENING_LABEL}</p>
                    <p className="countdown-sub">
                        {open
                            ? 'Come and find us on Atlantic Ave.'
                            : 'Memorial Day weekend, Misquamicut Beach.'}
                    </p>
                </div>

                {!open && (
                    <>
                        {/* Ticking every second would make a live region unusable,
                            so the clock is hidden from screen readers and the date
                            above carries the same information. */}
                        <ol className="countdown-clock" data-reveal aria-hidden="true">
                            {UNITS.map((unit, i) => {
                                const value =
                                    values === null
                                        ? '––'
                                        : String(values[i]).padStart(2, '0');

                                return (
                                    <li key={unit}>
                                        <span className="cd-cell">
                                            {/* Keyed on the value so it remounts and
                                                replays the flip whenever it changes. */}
                                            <b key={value}>{value}</b>
                                        </span>
                                        <span className="cd-unit">{unit}</span>
                                    </li>
                                );
                            })}
                        </ol>
                        <p className="sr-only">
                            Atlantic Ave Cruisers opens on {OPENING_LABEL}.
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}
