import { Head } from '@inertiajs/react';
import { Fleet } from '@/components/site/fleet';
import { Rates } from '@/components/site/rates';

export default function RatesPage() {
    return (
        <>
            <Head title="Moped Rentals" />
            <div className="page">
                <Rates />
                <Fleet />
            </div>
        </>
    );
}
