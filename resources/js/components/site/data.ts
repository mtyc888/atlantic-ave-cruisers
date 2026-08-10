/**
 * Absolute hrefs are Inertia page visits; bare "#anchor" hrefs scroll within
 * whatever page you are already on (the join band lives in the site layout).
 */
export const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/rates', label: 'Rates' },
    { href: '/join', label: 'Join the club' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
];

export const FACTS = [
    'Helmets and locks included',
    'Free lesson before you leave',
    'Weekly community ride, 6pm',
    'Open daily 9am to 6pm',
    'May through October',
    'Atlantic Ave, Westerly RI',
];

/** Copy for the rentals page, as supplied by the client. */
export const RENTALS_COPY = {
    title: 'Moped Rentals',
    lede: 'Choose from our fleet of reliable, easy-to-ride mopeds.',
    perks: [
        'Hourly Rentals',
        'Half-Day Rentals',
        'Full-Day Rentals',
        'Helmets Included',
        'Route Recommendations',
        'Beach Parking Tips',
    ],
};

/** One-off fee to join the community ride. */
export const CLUB_FEE = 5;

export const CLUB_PERKS = [
    'Added to the riders group chat',
    'The route by email every week',
    'Ride our mopeds or bring your own',
    'Open to every skill level',
];

export const DURATIONS = [
    { id: 'hour', label: 'Hour', detail: '60 minutes' },
    { id: 'half', label: 'Half day', detail: '4 hours' },
    { id: 'full', label: 'Full day', detail: '9am to 6pm' },
] as const;

export type DurationId = (typeof DURATIONS)[number]['id'];

/**
 * PLACEHOLDER FLEET — names, specs, prices and counts are invented so the rate
 * table has something to render. Replace every field with the real fleet
 * before this goes live.
 *
 * `rates` keys must match the DURATIONS ids above; the table renders a column
 * per duration, so adding a duration there adds a column here.
 */
export const FLEET = [
    {
        id: 'vehicle-1',
        name: 'vehicle-1',
        engine: '50cc',
        seats: 1,
        topSpeed: '30 mph',
        count: 6,
        rates: { hour: 1, half: 2, full: 3 },
    },
    {
        id: 'vehicle-2',
        name: 'vehicle-2',
        engine: '125cc',
        seats: 2,
        topSpeed: '45 mph',
        count: 4,
        popular: true,
        rates: { hour: 1, half: 2, full: 3 },
    },
    {
        id: 'vehicle-3',
        name: 'vehicle-3',
        engine: '150cc',
        seats: 2,
        topSpeed: '55 mph',
        count: 3,
        rates: { hour: 1, half: 2, full: 3 },
    },
    {
        id: 'vehicle-4',
        name: 'vehicle-4',
        engine: '150cc',
        seats: 2,
        topSpeed: '50 mph',
        count: 2,
        rates: { hour: 1, half: 2, full: 3 },
    },
];

/** Cheapest hourly rate in the fleet, for "from $X" copy. */
export const FLEET_FROM = Math.min(...FLEET.map((f) => f.rates.hour));

/**
 * Ordered west to east along the coast. Coordinates are approximate town
 * centres, good enough to place a marker but worth nudging against the real
 * meeting spot for each ride.
 */
export const STOPS = [
    {
        id: 'mystic',
        name: 'Mystic',
        state: 'CT',
        miles: 12.2,
        time: '40 min',
        lat: 41.3543,
        lng: -71.9665,
        note: 'Drawbridge village at the end of the line. Pizza at the top of the hill, seaport on the way back.',
    },
    {
        id: 'stonington',
        name: 'Stonington Borough',
        state: 'CT',
        miles: 9.5,
        time: '25 min',
        lat: 41.3336,
        lng: -71.9053,
        note: 'Stone piers, narrow streets, and the quietest point light on this list. Best at sunset.',
    },
    {
        id: 'watch-hill',
        name: 'Watch Hill',
        state: 'RI',
        miles: 3.6,
        time: '15 min',
        lat: 41.3093,
        lng: -71.8583,
        note: 'The carousel, the lighthouse, and the slow climb past the harbor. Park by the green.',
    },
    {
        id: 'misquamicut',
        name: 'Misquamicut Beach',
        state: 'RI',
        miles: 0.2,
        time: '8 min',
        lat: 41.3277,
        lng: -71.8069,
        note: 'Straight run along the state beach. Wind at your back on the way home if you time the sea breeze.',
    },
    {
        id: 'weekapaug',
        name: 'Weekapaug',
        state: 'RI',
        miles: 3.2,
        time: '18 min',
        lat: 41.3312,
        lng: -71.757,
        note: 'Low bridge over the breachway. Pull over and watch the fishermen cast at dusk.',
    },
    {
        id: 'charlestown',
        name: 'Charlestown',
        state: 'RI',
        miles: 9.8,
        time: '35 min',
        lat: 41.3766,
        lng: -71.6837,
        note: 'Salt pond roads and the long empty stretch past Blue Shutters. The quietest ride we run.',
    },
];

/** The shop every ride rolls out from. */
export const SHOP = {
    name: 'Atlantic Ave Cruisers',
    detail: 'Atlantic Ave, Westerly RI',
    lat: 41.3268,
    lng: -71.8107,
};

export const THIS_WEEK = 'weekapaug';

export const WEEK_STOP = STOPS.find((s) => s.id === THIS_WEEK) ?? STOPS[3];

export const PHOTOS = [
    { id: 'p1', src: null, alt: 'Sunset ride on Atlantic Ave', shape: 'wide' },
    { id: 'p2', src: null, alt: 'Watch Hill lighthouse stop', shape: 'tall' },
    { id: 'p3', src: null, alt: 'The fleet lined up at the shop', shape: 'sq' },
    { id: 'p4', src: null, alt: 'Breachway bridge at Weekapaug', shape: 'sq' },
    { id: 'p5', src: null, alt: 'The weekly crew at Misquamicut', shape: 'tall' },
    { id: 'p6', src: null, alt: 'Salt pond road, Charlestown', shape: 'wide' },
] as { id: string; src: string | null; alt: string; shape: string }[];

export const REASONS = [
    {
        title: 'Locals run it',
        body: 'We grew up on these roads. Ask us where to eat, where to swim, and which stretch to skip at rush hour.',
    },
    {
        title: 'Rides, not just rentals',
        body: 'Five dollars puts you in the club for good, on our mopeds or your own bike. Most people come back.',
    },
    {
        title: 'No fine print',
        body: 'The price on the board is the price. Fuel, gear, and the lesson are in it. Bring it back with a story.',
    },
];
