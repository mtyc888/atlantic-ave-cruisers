import type { FormEvent } from 'react';
import { useState } from 'react';
import { CLUB_FEE, CLUB_PERKS } from './data';

/**
 * Sign-up for the weekly community ride.
 *
 * Posts to /api/join, which emails the details to the shop inbox. Nothing is
 * stored and nothing is charged — the fee is collected in person, so the
 * copy must not imply an online payment was taken.
 */

type Fields = { name: string; email: string; phone: string; website: string };

const EMPTY: Fields = { name: '', email: '', phone: '', website: '' };

export function ClubSignup() {
    const [data, setData] = useState<Fields>(EMPTY);
    const [errors, setErrors] = useState<Partial<Record<keyof Fields | 'form', string>>>({});
    const [processing, setProcessing] = useState(false);
    const [sent, setSent] = useState(false);

    const set = (field: keyof Fields, value: string) => {
        setData((d) => ({ ...d, [field]: value }));
        setErrors((e) => ({ ...e, [field]: undefined }));
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (processing) return;

        setProcessing(true);
        setErrors({});

        try {
            const res = await fetch('/api/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSent(true);
                setData(EMPTY);
                return;
            }

            const body = await res.json().catch(() => ({}));
            setErrors(
                body.errors ?? {
                    form: 'Something went wrong sending that. Please try again, or email us directly.',
                },
            );
        } catch {
            setErrors({ form: 'Could not reach the server. Please check your connection.' });
        } finally {
            setProcessing(false);
        }
    };

    return (
        <section className="signup" id="signup">
            <div className="wrap signup-in">
                <div className="signup-copy" data-reveal>
                    <span className="label">Join the club</span>
                    <h2 className="h2">Ride with us</h2>
                    <p>
                        Pay the $5 and we’ll add you to the groupchat before the next ride
                    </p>

                    <ul className="signup-perks">
                        {CLUB_PERKS.map((perk) => (
                            <li key={perk}>{perk}</li>
                        ))}
                    </ul>
                </div>

                <div className="signup-card" data-reveal>
                    {sent ? (
                        <div className="signup-done">
                            <span className="label">You're in</span>
                            <p>We've got your details and we'll be in touch.</p>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} noValidate>
                            <div className="signup-price">
                                <b>${CLUB_FEE}</b>
                            </div>

                            <label>
                                <span>Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    value={data.name}
                                    onChange={(e) => set('name', e.target.value)}
                                    required
                                />
                                {errors.name && <em className="signup-error">{errors.name}</em>}
                            </label>

                            <label>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={data.email}
                                    onChange={(e) => set('email', e.target.value)}
                                    required
                                />
                                {errors.email && <em className="signup-error">{errors.email}</em>}
                            </label>

                            <label>
                                <span>Mobile</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    autoComplete="tel"
                                    value={data.phone}
                                    onChange={(e) => set('phone', e.target.value)}
                                    required
                                />
                                {errors.phone ? (
                                    <em className="signup-error">{errors.phone}</em>
                                ) : (
                                    <em>So we can add you to the group chat.</em>
                                )}
                            </label>

                            {/* Honeypot: off-screen and skipped by tabbing, so only a
                                bot fills it in. The server rejects any request that does. */}
                            <div className="signup-trap" aria-hidden="true">
                                <label>
                                    Website
                                    <input
                                        type="text"
                                        name="website"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={data.website}
                                        onChange={(e) => set('website', e.target.value)}
                                    />
                                </label>
                            </div>

                            <button className="btn btn-gold" type="submit" disabled={processing}>
                                {processing ? 'Sending…' : 'Sign me up'}
                            </button>

                            {errors.form && <p className="signup-error">{errors.form}</p>}

                            <p className="signup-fine">
                                The ${CLUB_FEE} is paid once. Riders under 18 need a parent along.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
