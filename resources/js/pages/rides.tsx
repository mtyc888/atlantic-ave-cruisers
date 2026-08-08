import { Head } from '@inertiajs/react';
import { Rides } from '@/components/site/rides';

export default function RidesPage() {
    return (
        <>
            <Head title="Weekly rides" />
            <div className="page">
                <Rides />
            </div>
        </>
    );
}
