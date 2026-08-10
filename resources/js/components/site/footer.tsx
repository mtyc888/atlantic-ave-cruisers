import badge from './aac-badge.png';
import { SiteLink } from './site-link';

export function Footer() {
    return (
        <footer className="foot">
            <div className="wrap">
                <div className="foot-grid">
                    <div>
                        <div className="mark" style={{ marginBottom: 16 }}>
                            <img className="mark-badge" src={badge} alt="" aria-hidden="true" />
                            <span className="mark-txt">
                                <b>Atlantic Ave</b>
                                <i>Cruisers</i>
                            </span>
                        </div>
                        <p className="foot-blurb">
                            Moped rentals and weekly community rides on the Rhode Island coast.
                        </p>
                    </div>

                    <div id="visit">
                        <h4>Visit</h4>
                        <p>
                            Atlantic Ave
                            <br />
                            Westerly, RI 02891
                        </p>
                        <p className="foot-dim">
                            Daily 9am to 6pm
                            <br />
                            May through October
                        </p>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="mailto:info@atlanticavecruisers.com">info@atlanticavecruisers.com</a>
                            </li>
                            <li>
                                <SiteLink href="/rates">Rates</SiteLink>
                            </li>
                            <li>
                                <SiteLink href="/join">Join the club</SiteLink>
                            </li>
                            <li>
                                <SiteLink href="/gallery">Gallery</SiteLink>
                            </li>
                            <li>
                                <SiteLink href="/waiver">Rental waiver</SiteLink>
                            </li>
                            <li>
                                <SiteLink href="/about">About</SiteLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="foot-bot">
                    <span>© {new Date().getFullYear()} Atlantic Ave Cruisers</span>
                    <span>Ride. Rent. Explore. Connect.</span>
                </div>
            </div>
        </footer>
    );
}
