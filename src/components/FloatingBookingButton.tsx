export default function FloatingBookingButton() {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-2xl overflow-hidden rounded-l-xl border border-slate-200 dark:border-slate-800">
            <button className="bg-primary text-white py-6 px-3 flex flex-col items-center gap-2 hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-xl">calendar_month</span>
                <span className="vertical-text font-bold text-xs tracking-widest uppercase">Book Now</span>
            </button>
            <button className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-6 px-3 flex flex-col items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-xl">mail</span>
                <span className="vertical-text font-bold text-xs tracking-widest uppercase">Inquiry</span>
            </button>
        </div>
    );
}
