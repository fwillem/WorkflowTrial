export default function Intro() {
    return (
        <section className="py-24 px-6 lg:px-10 bg-white dark:bg-background-dark/50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                        <img alt="Luxury interior design" className="w-full h-full object-cover" data-alt="Luxury chalet living room with wooden beams and fireplace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClr8EJREhKLAeK0AJhL_DqYlEDBEFcZZD46QAlh_vQiFAYLdP824qWnY67iIg1FqQ1Ae4DTGR-Cmkz3qKhdlPtV7iwLwaMaMtdr2zRlfhMOgLf8H7LA5EehoJbfHBubelKhGEu67dwBcWdeZ48M62g9fhJ5rlUbJIb-52xe62bRIxbBRkKTjA8vW0fl-s7cT2lNnDAwrGGIBkKLcUu4aKKHOQVFDCQ37pKcaRi_ITaatwyFjkMnQxY9dP1y50owwbfkPpKOcsX" />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                        <span className="text-white text-4xl font-black block">15+</span>
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Awards won</span>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Architecture &amp; Heritage</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase">A Masterpiece of Alpine Design</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Combining traditional craftsmanship with modern elegance, our chalet offers an unparalleled sanctuary in the heart of the Alps. Built with sustainable reclaimed wood and local stone, every corner reflects a commitment to quality and heritage.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        From the soaring vaulted ceilings to the handcrafted furnishings, we have created a space that celebrates the rugged beauty of the mountains while providing a cocoon of pure luxury.
                    </p>
                    <div className="pt-4">
                        <button className="group flex items-center gap-3 font-bold text-sm tracking-widest uppercase text-slate-900 dark:text-white">
                            Read the Story
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
