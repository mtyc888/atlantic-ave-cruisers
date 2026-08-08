import { CSSProperties } from 'react';
import { PHOTOS } from './data';
import { PhotoSlot } from './photo-slot';

export function Photos() {
    return (
        <section className="photos" id="photos">
            <div className="wrap">
                <div className="photos-head" data-reveal>
                    <span className="label">Photos</span>
                    <span className="label">Westerly · Watch Hill · Misquamicut</span>
                </div>
                <div className="grid">
                    {PHOTOS.map((p, idx) => (
                        <div
                            key={p.id}
                            className={`cell ${p.shape}`}
                            data-reveal
                            style={{ '--d': `${(idx % 3) * 0.09}s` } as CSSProperties}
                        >
                            <PhotoSlot src={p.src} alt={p.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
