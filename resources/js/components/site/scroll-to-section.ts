export function scrollToSection(href: string) {
    const el = document.querySelector(href);
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
}
