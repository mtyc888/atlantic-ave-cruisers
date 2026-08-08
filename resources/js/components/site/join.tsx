import { useState } from 'react';

export function Join() {
    const [email, setEmail] = useState('');
    const [joined, setJoined] = useState(false);

    return (
        <section className="join" id="join">
            <div className="join-in" data-reveal>
                <span className="label">Join the club</span>
                <h2 className="h2">One email, every Monday</h2>
                <p>
                    Where we are riding this week and which stretch of road is worth the detour.
                </p>

                {joined ? (
                    <>
                        <div className="joined">You're on the list</div>
                        <p className="join-note">Check {email || 'your inbox'} for Monday's route.</p>
                    </>
                ) : (
                    <>
                        <div className="field">
                            <input
                                type="email"
                                placeholder="you@example.com"
                                aria-label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && email.includes('@')) {
                                        setJoined(true);
                                    }
                                }}
                            />
                            <button
                                className="btn btn-gold"
                                onClick={() => {
                                    if (email.includes('@')) {
                                        setJoined(true);
                                    }
                                }}
                            >
                                Join
                            </button>
                        </div>
                        <p className="join-note">Weekly ride notes. Unsubscribe any time.</p>
                    </>
                )}
            </div>
        </section>
    );
}
