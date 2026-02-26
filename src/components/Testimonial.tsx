export default function Testimonial() {
    return (
        <section className="py-24 px-6 lg:px-10 bg-primary">
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <span className="material-symbols-outlined text-white/40 text-8xl">format_quote</span>
                <blockquote className="text-3xl md:text-5xl font-light text-white leading-tight italic">
                    "An experience beyond words. The attention to detail, the breathtaking views, and the exceptional service made our stay truly unforgettable. It's the pinnacle of alpine luxury."
                </blockquote>
                <div className="space-y-2">
                    <div className="text-white font-bold tracking-[0.2em] uppercase text-sm">Alexandra &amp; Marcus von Berg</div>
                    <div className="text-white/60 text-xs tracking-widest uppercase">Suite Guests, February 2024</div>
                </div>
            </div>
        </section>
    );
}
