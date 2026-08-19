import { useTitle } from '@/components/site/use-title';
import { RateTable } from '@/components/site/rate-table';
import { Rates } from '@/components/site/rates';

export default function RatesPage() {
    useTitle('Moped Rentals');

    return (
        <>
                        <div className="page">
                <Rates />
                <RateTable />
            </div>
        </>
    );
}
