import lucas from './lucas-santos.jpg';
import { PhotoSlot } from './photo-slot';

/**
 * Founder copy, reproduced word for word from the client. Do not reword,
 * trim or "tidy" it — any change should come from them.
 */

/** Founder portrait. Swap the import above to change it. */
const FOUNDER_PHOTO: string | null = lucas;

export function Founder() {
    return (
        <section className="founder" id="founder">
            <div className="wrap">
                <div className="founder-intro">
                    <div className="founder-photo" data-reveal>
                        <PhotoSlot
                            src={FOUNDER_PHOTO}
                            alt="Lucas Santos, founder of Atlantic Ave Cruisers"
                        />
                    </div>

                    <header className="founder-head" data-reveal>
                        <h2 className="h2">Meet the Founder — Lucas Santos</h2>
                        <p className="founder-role">Founder & Owner, Atlantic Ave Cruisers</p>
                    </header>
                </div>

                <div className="about-body">
                    <p data-reveal>
                        At just 25 years old, Lucas Santos has always believed in staying active,
                        getting involved, and finding ways to make a positive impact in the
                        communities he calls home.
                    </p>

                    <p data-reveal>
                        Born in Fort Lauderdale, Florida, Lucas moved to Rhode Island at a young age
                        and grew up here, developing a deep connection to the people, beaches, and
                        communities that make Rhode Island special. Westerly in particular has
                        always held a special place in his life. Having grown up spending time along
                        Atlantic Avenue and its beaches, Lucas knows firsthand what makes a Rhode
                        Island summer on the coast so special.
                    </p>

                    <p data-reveal>
                        Lucas' career has always centered around people, leadership, and community.
                        Professionally, he works as a Talent Acquisition Consultant helping connect
                        people with new career opportunities and guiding candidates through
                        important steps in their professional lives.
                    </p>

                    <p data-reveal>
                        Outside of his career, basketball has been another major part of Lucas'
                        life. He has been involved in coaching boys basketball at multiple levels
                        and spent two years coaching at Westerly High School, becoming part of the
                        local basketball community and building relationships with players,
                        families, and fellow coaches.
                    </p>

                    <p data-reveal>
                        Today, Lucas is back at his alma mater, Chariho High School, where he
                        continues to give back through high school boys basketball. Coaching has
                        given him the opportunity to work with young athletes, teach teamwork and
                        discipline, and hopefully make a positive impact on the next generation.
                    </p>

                    <p data-reveal>
                        Whether through recruiting, coaching, or now entrepreneurship, Lucas has
                        always enjoyed working with people and being part of something bigger than
                        himself.
                    </p>

                    <h2 data-reveal>The Idea Behind Atlantic Ave Cruisers</h2>

                    <p data-reveal>
                        Atlantic Ave Cruisers was launched in 2025, but the idea started long before
                        that.
                    </p>

                    <p data-reveal>
                        For Lucas, Atlantic Avenue represents the feeling of a true Rhode Island
                        summer — the ocean breeze, sunshine, beach traffic, restaurants, friends,
                        family, and the freedom of cruising along the coast on two wheels.
                    </p>

                    <p data-reveal>
                        Having ridden along Atlantic Avenue himself, Lucas experienced the smiles
                        and excitement that come from hopping on a moped and simply enjoying the
                        ride. He wanted to create a business that could give locals and visitors the
                        opportunity to experience that same feeling.
                    </p>

                    <p data-reveal>Atlantic Ave Cruisers is that idea coming to life.</p>

                    <p data-reveal>
                        The goal isn't just to rent mopeds. It's to create an experience that
                        becomes part of the Westerly summer.
                    </p>

                    <p data-reveal>
                        Whether you're a tourist visiting the area for the first time, a local
                        looking for something fun to do, or a group of friends looking to spend a
                        summer afternoon together, Atlantic Ave Cruisers gives people another way to
                        explore Westerly and enjoy everything the coastline has to offer.
                    </p>

                    <h2 data-reveal>Building Something for Westerly</h2>

                    <p data-reveal>
                        Lucas believes that a great business should contribute to the community
                        around it. Atlantic Ave Cruisers was created with the goal of bringing
                        something fun, different, and memorable to Westerly's beaches while becoming
                        part of the energy that makes the area such a special summer destination.
                    </p>

                    <p data-reveal>
                        From cruising Atlantic Avenue to stopping at local restaurants, checking out
                        scenic views, or joining one of our community rides, the experience is about
                        getting outside, exploring, meeting people, and enjoying the moment.
                    </p>

                    <p data-reveal>
                        And through our Atlantic Ave Cruisers community rides, we hope to build
                        something bigger than a rental business — a community of people who simply
                        love riding, the beach, and the Rhode Island summer.
                    </p>

                    <p data-reveal>
                        Lucas' vision is to create a business that people look forward to every
                        summer and, eventually, a tradition that feels like it has always belonged
                        on Atlantic Avenue.
                    </p>

                    <p className="about-signoff" data-reveal>
                        The beach. The breeze. The ride.
                    </p>

                    <p className="about-signoff is-tight" data-reveal>
                        Welcome to Atlantic Ave Cruisers
                    </p>
                </div>
            </div>
        </section>
    );
}
