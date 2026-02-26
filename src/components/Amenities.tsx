import { amenities } from "@/data/content";

export default function Amenities() {
    return (
        <section className="py-24 px-6 lg:px-10 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Unrivaled Service</h3>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase">Curated Amenities</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {amenities.map((amenity) => (
                        <div key={amenity.id} className="group bg-white dark:bg-slate-900/50 p-10 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
                            <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-3xl">{amenity.icon}</span>
                            </div>
                            <h4 className="text-lg font-bold mb-3 dark:text-white uppercase">{amenity.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{amenity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
