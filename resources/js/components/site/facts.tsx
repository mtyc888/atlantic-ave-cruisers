import { FACTS } from './data';

export function Facts() {
    const loop = [...FACTS, ...FACTS];
    return (
        <div className="facts" aria-label="Shop facts">
            <div className="facts-track">
                {loop.map((f, i) => (
                    <span key={`${f}-${i}`} aria-hidden={i >= FACTS.length}>
                        {f}
                    </span>
                ))}
            </div>
        </div>
    );
}
