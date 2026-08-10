import type { FormEvent } from 'react';
import { useState } from 'react';
import { CLUB_FEE, CLUB_PERKS, WEEK_STOP } from './data';

/**
 * Sign-up for the weekly community ride.
 *
 * FRONT END ONLY. Nothing is submitted or charged — there is no backend and no
 * payment provider wired up yet. Submitting just swaps in the confirmation
 * panel so the flow can be reviewed. Before this goes anywhere near real
 * users it needs a real handler and a real checkout.
 */
export function ClubSignup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sent, setSent] = useState(false);

    const canSubmit = name.trim() !== '' && email.includes('@') && phone.trim() !== '';

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (canSubmit) setSent(true);
    };

    return (
        <section className="signup" id="signup">
            <div className="wrap signup-in">
                <div className="signup-copy" data-reveal>
                    <span className="label">Join the club</span>
                    <h2 className="h2">
                        ${CLUB_FEE} to ride
                        <br />
                        with us
                    </h2>
                    <p>
                        One payment, not a subscription. It covers the group chat and the weekly
                        route, and it keeps the ride to people who actually turn up.
                    </p>

                    <ul className="signup-perks">
                        {CLUB_PERKS.map((perk) => (
                            <li key={perk}>{perk}</li>
                        ))}
                    </ul>

                    <p className="signup-next">
                        This week we ride to <b>{WEEK_STOP.name}</b>, 6pm from the shop.
                    </p>
                </div>

                <div className="signup-card" data-reveal>
                    {sent ? (
                        <div className="signup-done">
                            <span className="label">You're in</span>
                            <h3>See you at 6pm</h3>
                            <p>
                                We'll email {email} with the route and add {phone} to the riders
                                group chat before the next ride.
                            </p>
                            <button
                                className="btn btn-outline"
                                onClick={() => setSent(false)}
                            >
                                Sign up someone else
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} noValidate>
                            <div className="signup-price">
                                <b>${CLUB_FEE}</b>
                                <span>one off</span>
                            </div>

                            <label>
                                <span>Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                <span>Mobile</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    autoComplete="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                <em>So we can add you to the group chat.</em>
                            </label>

                            <button className="btn btn-gold" type="submit" disabled={!canSubmit}>
                                Pay ${CLUB_FEE} and join
                            </button>

                            <p className="signup-fine">
                                You only pay once. Riders under 18 need a parent along.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
