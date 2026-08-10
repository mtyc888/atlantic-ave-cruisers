/**
 * Absolute hrefs are Inertia page visits; bare "#anchor" hrefs scroll within
 * whatever page you are already on (the join band lives in the site layout).
 */
export const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/rates', label: 'Rates' },
    { href: '/join', label: 'Join the club' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/waiver', label: 'Waiver' },
    { href: '/about', label: 'About' },
];

export const FACTS = [
    'Helmets and locks included',
    'Free lesson before you leave',
    'Weekly community ride, 6pm',
    'Open daily 9am to 6pm',
    'May through October',
    '140 Atlantic Ave, Westerly RI',
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

/** Ten identical mopeds, so one price list covers the whole fleet. */
export const FLEET_SIZE = 10;
export const FLEET_ENGINE = '50cc';

export const RATES = [
    { id: '1h', label: '1 hour', price: 35 },
    { id: '2h', label: '2 hours', price: 60 },
    { id: '3h', label: '3 hours', price: 80 },
    { id: '5h', label: '5 hours', price: 125 },
    { id: 'day', label: 'Full day', price: 150 },
];

/** Lowest rate on the board, for "from $X" copy. */
export const RATE_FROM = Math.min(...RATES.map((r) => r.price));

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
    detail: '140 Atlantic Ave, Westerly RI',
    address: '140 Atlantic Ave, Westerly, RI 02891',
    lat: 41.3268,
    lng: -71.8107,
};

/** Google Maps URLs API — searches the address rather than pinning a coord. */
export const SHOP_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SHOP.address,
)}`;

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
