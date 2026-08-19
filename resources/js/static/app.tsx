import { Route, Routes } from 'react-router-dom';
import SiteLayout from '@/layouts/site-layout';
import About from '@/pages/about';
import Gallery from '@/pages/gallery';
import Join from '@/pages/join';
import Rates from '@/pages/rates';
import Waiver from '@/pages/waiver';
import Welcome from '@/pages/welcome';
import NotFound from './not-found';
import { ScrollToTop } from './scroll-to-top';

export function App() {
    return (
        <SiteLayout>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/rates" element={<Rates />} />
                <Route path="/join" element={<Join />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/waiver" element={<Waiver />} />
                <Route path="/about" element={<About />} />
                {/* Kept so old links still land somewhere sensible. */}
                <Route path="/rides" element={<Join />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </SiteLayout>
    );
}
