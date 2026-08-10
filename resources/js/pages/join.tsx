import { Head } from '@inertiajs/react';
import { ClubSignup } from '@/components/site/club-signup';
import { Rides } from '@/components/site/rides';

export default function JoinPage() {
    return (
        <>
            <Head title="Join the club" />
            <div className="page">
                <ClubSignup />
                <Rides />
            </div>
        </>
    );
}
