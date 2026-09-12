import type { ReactNode } from 'react';

const PARTICIPANT_FIELDS = [
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

const SAFETY_REQUIREMENTS = [
    'Wear a helmet and all required safety equipment throughout the tour.',
    'Follow all Rhode Island traffic laws and applicable local regulations.',
    'Follow the instructions and directions of the Atlantic Ave Cruisers tour guide.',
    'Maintain a safe speed and appropriate distance from other riders.',
    'Remain with the designated tour group.',
    'Operate the moped responsibly and safely at all times.',
    'Never operate the moped while under the influence of alcohol, drugs, or any substance that may impair my ability to operate it safely.',
    'Immediately notify the tour guide of any accident, injury, mechanical issue, or unsafe condition.',
    'Stop operating the moped immediately if instructed to do so by the tour guide.',
    'Conduct myself in a manner that does not endanger myself, other participants, pedestrians, motorists, or members of the public.',
];

const TOUR_RISKS = [
    'Falls or loss of control',
    'Motor vehicle collisions',
    'Collisions with other riders, pedestrians, objects, or property',
    'Uneven, wet, slippery, or damaged road surfaces',
    'Traffic and actions of other motorists',
    'Weather and environmental conditions',
    'Mechanical or equipment failure',
    'Personal injury or illness',
    'Property damage',
    'Serious bodily injury or death',
];

const EQUIPMENT_RESPONSIBILITIES = [
    'Operate the moped only as instructed by Atlantic Ave Cruisers.',
    'Not modify, tamper with, or intentionally misuse the moped or equipment.',
    'Immediately report any damage, malfunction, or safety concern to the tour guide.',
    'Not allow another person to operate the moped assigned to me.',
    'Return the moped and all provided equipment at the conclusion of the tour in substantially the same condition in which they were provided, subject to normal wear and tear.',
];

const PROHIBITED_CONDUCT = [
    'Operate the moped while impaired by alcohol, drugs, or any other substance.',
    'Engage in racing, stunts, wheelies, reckless riding, or other unsafe behavior.',
    'Pass the tour guide or designated lead rider unless instructed to do so.',
    'Intentionally separate from the tour group without authorization.',
    'Allow an unauthorized person to operate the moped.',
    'Use the moped for any purpose outside the designated tour.',
    'Disobey reasonable safety instructions from the tour guide.',
    'Engage in conduct that creates an unreasonable risk to themselves or others.',
    'Violate any applicable federal, state, or local law.',
];

const PARTICIPANT_ACKNOWLEDGMENTS = [
    'I have read and understand this Guided Moped Tour Waiver & Safety Acknowledgment.',
    'I understand that moped riding involves inherent risks, including the possibility of serious injury or death.',
    'I voluntarily choose to participate in the Atlantic Ave Cruisers guided moped tour.',
    'I agree to follow all applicable laws and all reasonable instructions provided by Atlantic Ave Cruisers and its tour guides.',
    'I understand that Atlantic Ave Cruisers may remove me from the tour if I violate safety rules or create a safety concern.',
    'I have had the opportunity to ask questions regarding the tour, moped operation, and safety requirements.',
    'I understand the terms of this waiver and voluntarily agree to them.',
];

function Field({ label }: { label: string }) {
    return (
        <div className="wv-field">
            <span>{label}:</span>
            <i />
        </div>
    );
}

function List({
    items,
    ordered = false,
}: {
    items: string[];
    ordered?: boolean;
}) {
    const ListTag = ordered ? 'ol' : 'ul';

    return (
        <ListTag>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ListTag>
    );
}

function WaiverSection({
    number,
    title,
    children,
}: {
    number: number;
    title: string;
    children: ReactNode;
}) {
    return (
        <section className="wv-block">
            <h2>
                {number}. {title}
            </h2>
            {children}
        </section>
    );
}

export function Waiver() {
    return (
        <article className="waiver">
            <header className="wv-head">
                <h1>Atlantic Ave Cruisers</h1>
                <p className="wv-sub">
                    Guided Moped Tour Waiver &amp; Safety Acknowledgment
                </p>
                <div className="wv-date wv-fields">
                    <Field label="Tour Date" />
                    <Field label="Tour Time" />
                </div>
            </header>

            <section className="wv-block">
                <h2>Participant Information</h2>
                <div className="wv-fields">
                    {PARTICIPANT_FIELDS.map((field) => (
                        <Field key={field} label={field} />
                    ))}
                </div>
            </section>

            <WaiverSection number={1} title="Eligibility to Participate">
                <p>
                    I certify that I am legally permitted to operate a moped
                    under applicable Rhode Island law and that I possess a valid
                    driver's license or other legally required authorization.
                </p>
                <p>
                    I understand that Atlantic Ave Cruisers may refuse
                    participation if I fail to meet applicable legal
                    requirements, fail to provide required identification,
                    appear impaired, or fail to comply with the safety
                    requirements of the tour.
                </p>
                <p>
                    I certify that I am physically and mentally capable of
                    safely operating a 50cc moped and participating in a guided
                    moped tour.
                </p>
            </WaiverSection>

            <WaiverSection number={2} title="Guided Tour Participation">
                <p>
                    I understand that Atlantic Ave Cruisers provides guided,
                    controlled moped tours in which participants operate mopeds
                    as part of an organized group led by an Atlantic Ave
                    Cruisers tour guide.
                </p>
                <p>
                    I agree to remain with the designated tour group and follow
                    all reasonable instructions provided by the tour guide
                    before and during the tour.
                </p>
                <p>
                    I understand that Atlantic Ave Cruisers may determine the
                    route, pace, stops, formation, and other operational aspects
                    of the tour for safety and logistical purposes.
                </p>
                <p>
                    I agree not to leave the designated tour route or group
                    without permission from the tour guide, except when
                    necessary due to an emergency.
                </p>
            </WaiverSection>

            <WaiverSection number={3} title="Safety Requirements">
                <p>
                    I acknowledge that riding a moped involves inherent risks,
                    including but not limited to falls, collisions, traffic
                    hazards, road conditions, weather conditions, mechanical
                    issues, property damage, serious injury, and death.
                </p>
                <p>I agree to:</p>
                <List items={SAFETY_REQUIREMENTS} />
            </WaiverSection>

            <WaiverSection number={4} title="Assumption of Risk">
                <p>
                    I understand that participation in a guided moped tour
                    involves inherent and foreseeable risks that cannot be
                    completely eliminated.
                </p>
                <p>These risks may include, but are not limited to:</p>
                <List items={TOUR_RISKS} />
                <p>
                    I voluntarily choose to participate in the guided moped tour
                    and knowingly assume the risks associated with participating
                    in the activity.
                </p>
                <p>
                    I understand that following the tour guide and safety
                    instructions can reduce, but cannot completely eliminate,
                    these risks.
                </p>
            </WaiverSection>

            <WaiverSection number={5} title="Release of Liability">
                <p>
                    To the fullest extent permitted by Rhode Island law, I
                    release and agree to hold harmless Atlantic Ave Cruisers,
                    its owners, members, employees, tour guides, agents,
                    representatives, affiliates, and contractors from claims,
                    liabilities, damages, losses, costs, or expenses arising out
                    of or related to my participation in the guided moped tour,
                    including claims arising from the inherent risks of moped
                    riding.
                </p>
                <p>
                    This release does not apply to conduct for which liability
                    cannot legally be waived or released under applicable law.
                </p>
            </WaiverSection>

            <WaiverSection
                number={6}
                title="Moped and Equipment Responsibility"
            >
                <p>
                    I acknowledge that the moped and safety equipment provided
                    to me by Atlantic Ave Cruisers are intended to be used
                    solely for participation in the designated guided tour.
                </p>
                <p>I agree to:</p>
                <List items={EQUIPMENT_RESPONSIBILITIES} />
                <p>
                    I understand that I may be financially responsible for
                    damage caused by intentional misuse, reckless conduct, or
                    negligent operation, to the extent permitted by law.
                </p>
            </WaiverSection>

            <WaiverSection number={7} title="Prohibited Conduct">
                <p>Participants may not:</p>
                <List items={PROHIBITED_CONDUCT} />
                <p>
                    Atlantic Ave Cruisers reserves the right to end a
                    participant's tour immediately if the participant violates
                    safety rules, appears impaired, operates the moped
                    recklessly, or otherwise creates a safety concern.
                </p>
            </WaiverSection>

            <WaiverSection number={8} title="Weather and Tour Conditions">
                <p>
                    I understand that outdoor tours are subject to weather,
                    traffic, road conditions, and other circumstances beyond the
                    control of Atlantic Ave Cruisers.
                </p>
                <p>
                    Atlantic Ave Cruisers may modify, delay, shorten, reroute,
                    or cancel a tour when reasonably necessary for safety or
                    operational reasons.
                </p>
                <p>
                    I understand that conditions may change during the tour and
                    agree to follow the instructions of the tour guide regarding
                    any changes to the tour.
                </p>
            </WaiverSection>

            <WaiverSection number={9} title="Personal Belongings">
                <p>
                    I understand that Atlantic Ave Cruisers is not responsible
                    for lost, stolen, or damaged personal belongings brought to
                    or during the tour.
                </p>
            </WaiverSection>

            <WaiverSection number={10} title="Emergency Contact">
                <div className="wv-fields">
                    <Field label="Name" />
                    <Field label="Relationship" />
                    <Field label="Phone Number" />
                </div>
            </WaiverSection>

            <WaiverSection number={11} title="Emergency Medical Authorization">
                <p>
                    In the event of an emergency, I authorize Atlantic Ave
                    Cruisers personnel to contact emergency medical services on
                    my behalf.
                </p>
                <p>
                    I understand that Atlantic Ave Cruisers and its
                    representatives are not responsible for medical expenses
                    incurred as a result of my participation in the tour.
                </p>
            </WaiverSection>

            <WaiverSection number={12} title="Participant Acknowledgment">
                <p>By signing below, I acknowledge that:</p>
                <List items={PARTICIPANT_ACKNOWLEDGMENTS} ordered />
                <div className="wv-fields">
                    <Field label="Participant Signature" />
                    <Field label="Date" />
                </div>
            </WaiverSection>

            <section className="wv-sign">
                <h3>Atlantic Ave Cruisers Representative</h3>
                <div className="wv-fields">
                    <Field label="Name" />
                    <Field label="Signature" />
                    <Field label="Date" />
                </div>
            </section>
        </article>
    );
}
