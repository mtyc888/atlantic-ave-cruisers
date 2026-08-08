import { PhotoSlot } from './photo-slot';

/**
 * Full-bleed location shot between the hero and the facts marquee.
 * Drop the real photograph in here — until then PhotoSlot renders a
 * labelled placeholder at the right size, so the layout never shifts.
 */
const BAND_PHOTO: string | null = null;

export function PhotoBand() {
    return (
        <section className="band">
            <div className="band-media">
                <PhotoSlot
                    src={BAND_PHOTO}
                    alt="The fleet on Atlantic Ave, Misquamicut Beach"
                />
            </div>

            <div className="band-tag">
                <div className="wrap band-tag-in" data-reveal>
                    <span className="label">Atlantic Ave</span>
                    <em>Misquamicut Beach · Westerly, Rhode Island</em>
                </div>
            </div>
        </section>
    );
}
