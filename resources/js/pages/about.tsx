import { useTitle } from '@/components/site/use-title';
import { About } from '@/components/site/about';
import { TOUR_SCHEDULE } from '@/components/site/data';
import { Founder } from '@/components/site/founder';

export default function AboutPage() {
    useTitle('About');

    return (
        <>
                        <div className="page">
                <About />
                <Founder />

                <section className="contact" id="contact">
                    <div className="wrap">
                        <header className="about-head" data-reveal>
                            <span className="label">Contact</span>
                            <h2 className="h2">Get in touch</h2>
                        </header>

                        <dl className="contact-grid" data-reveal>
                            <div>
                                <dt>Address</dt>
                                <dd>[TBD]</dd>
                            </div>
                            <div>
                                <dt>Hours</dt>
                                <dd>
                                    {TOUR_SCHEDULE}
                                </dd>
                            </div>
                            <div>
                                <dt>Email</dt>
                                <dd>
                                    <a href="mailto:atlantic.ave.cruisers@gmail.com">
                                        atlantic.ave.cruisers@gmail.com
                                    </a>
                                </dd>
                            </div>
                            <div>
                                <dt>Phone</dt>
                                <dd>
                                    <a href="tel:+14012848925">401-284-8925</a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </>
    );
}
