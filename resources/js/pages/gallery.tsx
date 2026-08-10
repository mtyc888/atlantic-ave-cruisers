import { Head } from '@inertiajs/react';
import { Photos } from '@/components/site/photos';

export default function GalleryPage() {
    return (
        <>
            <Head title="Gallery" />
            <div className="page">
                <Photos />
            </div>
        </>
    );
}
