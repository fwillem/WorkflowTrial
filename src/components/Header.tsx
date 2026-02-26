import { navLinks } from "@/data/content";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-1.5 rounded-lg">
                        <span className="material-symbols-outlined text-white text-2xl">mountain_flag</span>
                    </div>
                    <h1 className="font-black text-xl tracking-tighter text-slate-900 dark:text-white uppercase">Luxury Chalet</h1>
                </div>
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.label} className={`text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors ${link.active ? 'text-slate-900 dark:text-slate-200' : 'text-slate-600 dark:text-slate-400'}`} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-bold">
                        <span>EN</span>
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                    </button>
                    <button className="lg:hidden material-symbols-outlined">menu</button>
                </div>
            </div>
        </header>
    );
}
