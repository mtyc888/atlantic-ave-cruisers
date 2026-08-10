import { Head } from '@inertiajs/react';
import { RateTable } from '@/components/site/rate-table';
import { Rates } from '@/components/site/rates';

export default function RatesPage() {
    return (
        <>
            <Head title="Moped Rentals" />
            <div className="page">
                <Rates />
                <RateTable />
            </div>
        </>
    );
}
