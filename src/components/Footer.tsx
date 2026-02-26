import { footerLinks } from "@/data/content";

export default function Footer() {
    return (
        <footer className="bg-background-dark text-slate-400 py-20 px-6 lg:px-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-white">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <span className="material-symbols-outlined text-white text-xl">mountain_flag</span>
                            </div>
                            <h2 className="font-black text-lg tracking-tighter uppercase">Luxury Chalet</h2>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Dedicated to providing the world's most exclusive alpine experiences since 1994. Quality, discretion, and excellence in every stay.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-white text-sm">public</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-white text-sm">share</span>
                            </a>
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h5 className="text-white font-bold uppercase text-xs tracking-widest mb-8">{section.title}</h5>
                            <ul className="space-y-4 text-sm">
                                {section.links.map((link) => (
                                    <li key={link.label} className={link.icon ? "flex items-center gap-3" : ""}>
                                        {link.icon && <span className="material-symbols-outlined text-primary text-sm">{link.icon}</span>}
                                        {link.href ? (
                                            <a className="hover:text-primary transition-colors" href={link.href}>{link.label}</a>
                                        ) : (
                                            <>{link.label}</>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs uppercase tracking-widest">© 2024 Luxury Chalet Alpine Retreat. All Rights Reserved.</p>
                    <div className="flex gap-8 text-xs uppercase tracking-widest">
                        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
