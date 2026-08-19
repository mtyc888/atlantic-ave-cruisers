import { Link } from '@/components/site/router';
import { useTitle } from '@/components/site/use-title';

export default function NotFound() {
    useTitle('Page not found');

    return (
        <div className="page">
            <section className="about">
                <div className="wrap">
                    <header className="about-head">
                        <span className="label">404</span>
                        <h1 className="h2">Page not found</h1>
                        <p className="about-lede">
                            That page has moved or never existed.
                        </p>
                    </header>
                    <Link className="btn btn-gold" href="/">
                        Back to the home page
                    </Link>
                </div>
            </section>
        </div>
    );
}
