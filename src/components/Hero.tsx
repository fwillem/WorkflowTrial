export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
                <div className="w-full h-full bg-cover bg-center scale-105" data-alt="Snow covered luxury alpine chalet exterior at sunset" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVqjc5qydz-57APcUkR48JN2KlbgD-kZIFiD1Ybii9fl6cjr3Uj4Q4Z00fkiRkSD9RTBenmhx9VAaVbs8t7g3dH2_x84Oiy7umvQeChG8E07r45lzE2QksgjfLFmY44R3H-v9PDUgdIC8a38JNr7_16BUP5DfKdPygp49wsofxVIhE93tngkdZI27WHXpsfqsfxh4lJu-UaoxLcmynK3YEsFFO3aW7ipAc1MB0-83jGI7H_B7DVOQBRokq1BRacFIxZAQ5f1rG')" }}>
                </div>
            </div>
            <div className="relative z-20 text-center px-6 max-w-4xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary font-bold text-xs tracking-widest uppercase mb-6">Exclusive Alpine Retreat</span>
                <h2 className="text-white text-5xl md:text-7xl font-black leading-tight mb-8 drop-shadow-lg uppercase tracking-tight">Experience the Pinnacle of Comfort</h2>
                <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">Indulge in an exclusive alpine retreat where luxury meets the mountains, offering curated experiences and unmatched serenity.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl">Discover More</button>
                    <button className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/20 transition-all">Virtual Tour</button>
                </div>
            </div>
        </section>
    );
}
