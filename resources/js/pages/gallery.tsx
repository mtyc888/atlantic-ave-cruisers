import { useTitle } from '@/components/site/use-title';
import { Photos } from '@/components/site/photos';

export default function GalleryPage() {
    useTitle('Gallery');

    return (
        <>
                        <div className="page">
                <Photos />
            </div>
        </>
    );
}
