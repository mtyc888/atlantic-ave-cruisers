import { useTitle } from '@/components/site/use-title';
import { ClubSignup } from '@/components/site/club-signup';
import { Rides } from '@/components/site/rides';

export default function JoinPage() {
    useTitle('Join the club');

    return (
        <>
                        <div className="page">
                <ClubSignup />
                <Rides />
            </div>
        </>
    );
}
