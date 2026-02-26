import { seasons } from "@/data/content";
import SeasonCard from "./SeasonCard";

export default function Seasons() {
    return (
        <section className="py-24 px-6 lg:px-10 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {seasons.map((season) => (
                    <SeasonCard key={season.id} season={season} />
                ))}
            </div>
        </section>
    );
}
