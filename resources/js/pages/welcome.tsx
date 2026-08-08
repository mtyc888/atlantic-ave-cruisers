import { Head } from '@inertiajs/react';
import { Facts } from '@/components/site/facts';
import { Hero } from '@/components/site/hero';
import { PhotoBand } from '@/components/site/photo-band';
import { Photos } from '@/components/site/photos';
import { RatesTeaser } from '@/components/site/rates-teaser';
import { RidesTeaser } from '@/components/site/rides-teaser';
import { Why } from '@/components/site/why';

export default function Welcome() {
    return (
        <>
            <Head title="Moped rentals in Westerly, RI" />
            <Hero />
            <PhotoBand />
            <Facts />
            <RatesTeaser />
            <RidesTeaser />
            <Photos />
            <Why />
        </>
    );
}
