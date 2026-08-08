import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet';
import { SHOP, STOPS } from './data';
import { ROUTE_TO } from './routes';

/** CARTO Dark Matter — sits inside the navy section without a key. */
const TILE_URL = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const TILE_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const ALL_POINTS = L.latLngBounds([
    [SHOP.lat, SHOP.lng],
    ...STOPS.map((s) => [s.lat, s.lng] as [number, number]),
]).pad(0.15);

/** Frames whichever run is selected, falling back to the whole coast. */
function FitToRoute({ active }: { active: string }) {
    const map = useMap();

    useEffect(() => {
        const route = ROUTE_TO[active];
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const target = route?.length ? L.latLngBounds(route).pad(0.25) : ALL_POINTS;

        map.flyToBounds(target, { duration: reduced ? 0 : 0.8 });
    }, [active, map]);

    return null;
}

type RidesMapProps = {
    active: string;
    onSelect: (id: string) => void;
};

export function RidesMap({ active, onSelect }: RidesMapProps) {
    // Leaflet reaches for `window` on import, so hold the map back until the
    // client has mounted rather than rendering it during SSR.
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="ridesmap ridesmap-idle" aria-hidden="true" />;
    }

    const route = ROUTE_TO[active];

    return (
        <MapContainer
            className="ridesmap"
            bounds={ALL_POINTS}
            scrollWheelZoom={false}
            attributionControl
        >
            <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} subdomains="abcd" />

            {/* The run for the selected stop, following real roads. */}
            {route && (
                <Polyline
                    positions={route}
                    pathOptions={{
                        color: '#e5a33c',
                        weight: 4,
                        opacity: 0.95,
                        lineCap: 'round',
                        lineJoin: 'round',
                    }}
                    interactive={false}
                />
            )}

            <CircleMarker
                center={[SHOP.lat, SHOP.lng]}
                radius={6}
                pathOptions={{ color: '#f8f1e4', weight: 2.5, fillColor: '#1c4a66', fillOpacity: 1 }}
                interactive={false}
            >
                <Tooltip className="stop-label shop" direction="bottom" offset={[0, 8]} permanent>
                    {SHOP.name}
                </Tooltip>
            </CircleMarker>

            {STOPS.map((s) => {
                const on = s.id === active;
                return (
                    <CircleMarker
                        key={s.id}
                        center={[s.lat, s.lng]}
                        radius={on ? 9 : 6}
                        pathOptions={{
                            color: on ? '#e5a33c' : '#f8f1e4',
                            weight: 2,
                            fillColor: on ? '#e5a33c' : '#0f3149',
                            fillOpacity: 1,
                        }}
                        eventHandlers={{ click: () => onSelect(s.id) }}
                    >
                        <Tooltip
                            className={`stop-label ${on ? 'on' : ''}`}
                            direction="top"
                            offset={[0, -10]}
                            permanent
                        >
                            {s.name}
                        </Tooltip>
                    </CircleMarker>
                );
            })}

            <FitToRoute active={active} />
        </MapContainer>
    );
}
