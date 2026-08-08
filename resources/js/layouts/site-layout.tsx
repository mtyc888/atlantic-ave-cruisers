import '@/components/site/site.css';
import type { ReactNode } from 'react';
import { Footer } from '@/components/site/footer';
import { Join } from '@/components/site/join';
import { Nav } from '@/components/site/nav';
import { useHashScroll } from '@/components/site/use-hash-scroll';
import { useReveal } from '@/components/site/use-reveal';

/**
 * Public marketing chrome. The join band and footer repeat on every page,
 * so only the section content between them changes on navigation.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
    useReveal();
    useHashScroll();

    return (
        <div className="aac">
            <Nav />
            <main id="top">{children}</main>
            <Join />
            <Footer />
        </div>
    );
}
