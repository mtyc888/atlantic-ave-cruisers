import { Head } from '@inertiajs/react';

/**
 * PLACEHOLDER PAGE. The client is supplying the about and contact copy — the
 * blocks below are structure only, with no invented history or claims.
 * Replace the placeholder text, then delete the `is-placeholder` classes.
 */
export default function AboutPage() {
    return (
        <>
            <Head title="About" />
            <div className="page">
                <section className="about">
                    <div className="wrap">
                        <header className="about-head" data-reveal>
                            <span className="label">About us</span>
                            <h1 className="h2">Atlantic Ave Cruisers</h1>
                            <p className="about-lede is-placeholder">
                                Copy about us placeholder
                            </p>
                        </header>

                        <div className="about-grid">
                            <div className="about-block is-placeholder" data-reveal>
                                <h2>Our story</h2>
                                <p>Placeholder.</p>
                            </div>
                            <div className="about-block is-placeholder" data-reveal>
                                <h2>The shop</h2>
                                <p>Placeholder.</p>
                            </div>
                            <div className="about-block is-placeholder" data-reveal>
                                <h2>The crew</h2>
                                <p>Placeholder.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact" id="contact">
                    <div className="wrap">
                        <header className="about-head" data-reveal>
                            <span className="label">Contact</span>
                            <h2 className="h2">Get in touch</h2>
                        </header>

                        <dl className="contact-grid" data-reveal>
                            <div>
                                <dt>Address</dt>
                                <dd>
                                    Atlantic Ave
                                    <br />
                                    Westerly, RI 02891
                                </dd>
                            </div>
                            <div>
                                <dt>Hours</dt>
                                <dd>
                                    Daily 9am to 6pm
                                    <br />
                                    May through October
                                </dd>
                            </div>
                            <div>
                                <dt>Email</dt>
                                <dd>
                                    <a href="mailto:info@atlanticavecruisers.com">
                                        info@atlanticavecruisers.com
                                    </a>
                                </dd>
                            </div>
                            <div className="is-placeholder">
                                <dt>Phone</dt>
                                <dd>Placeholder.</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </>
    );
}
