import { useTitle } from '@/components/site/use-title';
import { Waiver } from '@/components/site/waiver';

export default function WaiverPage() {
    useTitle('Rental waiver');

    return (
        <>
                        <div className="page">
                <section className="waiver-page">
                    <div className="wrap">
                        <div className="waiver-intro">
                            <div>
                                <span className="label">Before you ride</span>
                                <h2 className="h2">The waiver</h2>
                                <p>
                                    Every rider signs this at the shop. Read it here first, or
                                    print a copy and bring it filled in.
                                </p>
                            </div>
                            <button
                                className="btn btn-gold waiver-print"
                                onClick={() => window.print()}
                            >
                                Print the waiver
                            </button>
                        </div>

                        <Waiver />
                    </div>
                </section>
            </div>
        </>
    );
}
