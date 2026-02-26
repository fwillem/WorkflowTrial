export default function AccommodationCard({ accommodation, reverse }: { accommodation: any, reverse: boolean }) {
    return (
        <div className={`max-w-7xl mx-auto px-6 lg:px-10 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
            <div className="flex-1 space-y-6">
                <h3 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">{accommodation.tag}</h3>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase">{accommodation.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {accommodation.description}
                </p>
                <ul className="space-y-3">
                    {accommodation.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold text-xs tracking-widest uppercase mt-4">
                    {accommodation.buttonText}
                </button>
            </div>
            <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-2xl h-[450px]">
                <img
                    alt={accommodation.tag}
                    className="w-full h-full object-cover"
                    data-alt={accommodation.imageAlt}
                    src={accommodation.imageSrc}
                />
            </div>
        </div>
    );
}
