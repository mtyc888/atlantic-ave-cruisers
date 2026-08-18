import { useForm, usePage } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { CLUB_FEE, CLUB_PERKS } from './data';

/**
 * Sign-up for the weekly community ride.
 *
 * Posts to /join, which emails the details to the shop inbox. Nothing is
 * stored and nothing is charged — the fee is collected in person, so the
 * copy must not imply an online payment was taken.
 */
export function ClubSignup() {
    const { props } = usePage<{ flash?: { signedUp?: boolean } }>();
    const sent = Boolean(props.flash?.signedUp);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        website: '', // honeypot — must stay empty
    });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/join', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <section className="signup" id="signup">
            <div className="wrap signup-in">
                <div className="signup-copy" data-reveal>
                    <span className="label">Join the club</span>
                    <h2 className="h2">Ride with us</h2>
                    <p>
                        Tell us where to find you and we'll add you to the group chat before the
                        next ride.
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
                            <p>
                                We've got your details and we'll be in touch.
                            </p>
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
                                    onChange={(e) => setData('name', e.target.value)}
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
                                    onChange={(e) => setData('email', e.target.value)}
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
                                    onChange={(e) => setData('phone', e.target.value)}
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
                                        onChange={(e) => setData('website', e.target.value)}
                                    />
                                </label>
                            </div>

                            <button className="btn btn-gold" type="submit" disabled={processing}>
                                {processing ? 'Sending…' : 'Sign me up'}
                            </button>

                            <p className="signup-fine">
                                The ${CLUB_FEE} is paid once. Riders under 18 need a
                                parent along.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
