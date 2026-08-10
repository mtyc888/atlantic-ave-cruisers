/**
 * Rental agreement and liability waiver, reproduced verbatim from the copy
 * supplied by the client. The underscore runs in the source document are
 * rendered as ruled blanks; no wording has been changed.
 *
 * This is legal text — do not reword, summarise or "tidy" it. Any change
 * should come from the client.
 */

const RENTER_FIELDS = [
    'Full Name',
    'Date of Birth',
    'Address',
    'City/State/ZIP',
    'Phone Number',
    'Email',
    'Driver’s License Number',
    'State Issued',
    'Expiration Date',
];

const VEHICLE_FIELDS = ['Moped Make/Model', 'Year', 'Fuel Level'];

const EMERGENCY_FIELDS = ['Name', 'Relationship', 'Phone Number'];

function Field({ label }: { label: string }) {
    return (
        <div className="wv-field">
            <span>{label}:</span>
            <i />
        </div>
    );
}

export function Waiver() {
    return (
        <article className="waiver">
            <header className="wv-head">
                <h1>Atlantic Ave Cruisers</h1>
                <p className="wv-sub">
                    Moped Rental Agreement, Liability Waiver &amp; Safety Acknowledgment
                </p>
                <div className="wv-date">
                    <Field label="Rental Date" />
                </div>
            </header>

            <section className="wv-block">
                <h2>Renter Information</h2>
                <div className="wv-fields">
                    {RENTER_FIELDS.map((f) => (
                        <Field key={f} label={f} />
                    ))}
                </div>
            </section>

            <section className="wv-block">
                <h2>
                    <b>1.</b> Eligibility to Operate a Moped
                </h2>
                <p>
                    I certify that I am legally permitted to operate a moped under Rhode Island law
                    and that I possess a valid driver’s license or other required authorization.
                </p>
                <p>
                    I understand that Atlantic Ave Cruisers may refuse rental service if I fail to
                    provide proper identification, fail to meet legal requirements, appear impaired,
                    or fail to follow safety requirements.
                </p>
                <p>I certify that I am physically capable of safely operating a 50cc moped.</p>
            </section>

            <section className="wv-block">
                <h2>
                    <b>2.</b> Rental Vehicle Information
                </h2>
                <div className="wv-fields">
                    {VEHICLE_FIELDS.map((f) => (
                        <Field key={f} label={f} />
                    ))}
                </div>
                <p>
                    I acknowledge that I have inspected the moped and accept it in its current
                    condition. I agree to notify Atlantic Ave Cruisers of any existing damage before
                    operating the vehicle.
                </p>
            </section>

            <section className="wv-block">
                <h2>
                    <b>3.</b> Safety Requirements
                </h2>
                <p>
                    I acknowledge that operating a moped involves risks, including but not limited
                    to falls, collisions, property damage, injury, and other hazards associated with
                    riding.
                </p>
                <p>I agree to:</p>
                <ul>
                    <li>
                        Wear a helmet and any required safety equipment while operating the moped.
                    </li>
                    <li>Follow all Rhode Island traffic laws.</li>
                    <li>Operate the moped in a safe and responsible manner.</li>
                    <li>
                        Never operate the moped while under the influence of alcohol, drugs, or any
                        substance that may impair my ability to ride safely.
                    </li>
                    <li>
                        Allow only authorized renters listed on this agreement to operate the moped.
                    </li>
                    <li>Return the moped at the agreed-upon time.</li>
                </ul>
            </section>

            <section className="wv-block">
                <h2>
                    <b>4.</b> Assumption of Risk
                </h2>
                <p>
                    I understand that riding a moped carries inherent risks. By renting and
                    operating a moped from Atlantic Ave Cruisers, I voluntarily assume
                    responsibility for the risks associated with operating the vehicle.
                </p>
                <p>
                    I understand that Atlantic Ave Cruisers provides properly maintained rental
                    equipment but cannot control how I operate the moped or the actions of other
                    drivers, pedestrians, or road conditions.
                </p>
            </section>

            <section className="wv-block">
                <h2>
                    <b>5.</b> Release of Liability
                </h2>
                <p>
                    To the fullest extent permitted by Rhode Island law, I release and hold harmless
                    Atlantic Ave Cruisers, its owners, employees, agents, and representatives from
                    claims, liabilities, damages, losses, or expenses arising from my use or
                    operation of the rented moped, except where prohibited by law.
                </p>
            </section>

            <section className="wv-block">
                <h2>
                    <b>6.</b> Damage Responsibility
                </h2>
                <p>
                    I agree to return the moped in the same condition as when received, except for
                    normal wear and tear.
                </p>
                <p>I accept responsibility for:</p>
                <ul>
                    <li>
                        Damage caused by improper operation, negligence, misuse, or violation of
                        rental rules.
                    </li>
                    <li>Loss of equipment provided with the rental.</li>
                    <li>Damage caused by unauthorized operators.</li>
                    <li>
                        Any applicable charges related to late return, damage, or missing equipment.
                    </li>
                </ul>
            </section>

            <section className="wv-block">
                <h2>
                    <b>7.</b> Prohibited Use
                </h2>
                <p>The moped may not be used:</p>
                <ul>
                    <li>By anyone not listed as an authorized rider.</li>
                    <li>For racing, reckless riding, or unsafe behavior.</li>
                    <li>While impaired by alcohol or drugs.</li>
                    <li>Off-road or in prohibited areas.</li>
                    <li>In any manner that violates Rhode Island law.</li>
                </ul>
            </section>

            <section className="wv-block">
                <h2>
                    <b>8.</b> Personal Belongings
                </h2>
                <p>
                    Atlantic Ave Cruisers is not responsible for lost, stolen, or damaged personal
                    belongings left with the vehicle.
                </p>
            </section>

            <section className="wv-block">
                <h2>
                    <b>9.</b> Emergency Contact
                </h2>
                <div className="wv-fields">
                    {EMERGENCY_FIELDS.map((f) => (
                        <Field key={f} label={f} />
                    ))}
                </div>
            </section>

            <section className="wv-block">
                <h2>
                    <b>10.</b> Customer Acknowledgment
                </h2>
                <p>
                    I have read and understand this agreement. I have had the opportunity to ask
                    questions regarding the rental, operation, and safety requirements of the moped.
                </p>
                <p>
                    I voluntarily agree to the terms of this agreement and understand the
                    responsibilities involved in renting and operating a moped.
                </p>
            </section>

            <section className="wv-sign">
                <div className="wv-fields">
                    <Field label="Renter Signature" />
                    <Field label="Date" />
                </div>

                <h3>Atlantic Ave Cruisers Representative:</h3>
                <div className="wv-fields">
                    <Field label="Signature" />
                    <Field label="Date" />
                </div>
            </section>
        </article>
    );
}
