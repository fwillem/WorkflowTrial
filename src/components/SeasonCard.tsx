export default function SeasonCard({ season }: { season: any }) {
    return (
        <div className="relative group h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-alt={season.imageAlt}
                style={{ backgroundImage: `url('${season.imageSrc}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
                <h4 className="text-white text-4xl font-black mb-4 uppercase">{season.title}</h4>
                <p className="text-white/80 mb-6 max-w-sm">{season.description}</p>
                <button className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-colors">
                    {season.buttonText}
                </button>
            </div>
        </div>
    );
}
