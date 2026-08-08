type PhotoSlotProps = {
    src: string | null;
    alt: string;
    className?: string;
};

export function PhotoSlot({ src, alt, className = '' }: PhotoSlotProps) {
    if (src) {
        return <img className={`slot ${className}`} src={src} alt={alt} loading="lazy" />;
    }
    return (
        <div className={`slot slot-empty ${className}`} role="img" aria-label={alt}>
            <span>{alt}</span>
        </div>
    );
}
