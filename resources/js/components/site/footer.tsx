import badge from './aac-badge.png';
import { TOUR_SCHEDULE } from './data';
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
                            Guided moped tours and community rides on the Rhode Island coast.
                        </p>
                    </div>

                    <div>
                        <h4>Visit</h4>
                        <p>[TBD]</p>
                        <p className="foot-dim">
                            {TOUR_SCHEDULE}
                        </p>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="mailto:atlantic.ave.cruisers@gmail.com">atlantic.ave.cruisers@gmail.com</a>
                            </li>
                            <li>
                                <SiteLink href="/rates">Moped Tours</SiteLink>
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
