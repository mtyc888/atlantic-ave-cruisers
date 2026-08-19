import { useTitle } from '@/components/site/use-title';
import { Countdown } from '@/components/site/countdown';
import { Facts } from '@/components/site/facts';
import { Hero } from '@/components/site/hero';
import { RatesTeaser } from '@/components/site/rates-teaser';
import { RidesTeaser } from '@/components/site/rides-teaser';
import { Why } from '@/components/site/why';

export default function Welcome() {
    useTitle('Moped rentals in Westerly, RI');

    return (
        <>
                        <Hero />
            <Countdown />
            <Facts />
            <RatesTeaser />
            <RidesTeaser />
            <Why />
        </>
    );
}
