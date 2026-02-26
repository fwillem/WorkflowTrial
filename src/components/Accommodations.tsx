import { accommodations } from "@/data/content";
import AccommodationCard from "./AccommodationCard";

export default function Accommodations() {
    return (
        <section className="py-24 space-y-24 bg-white dark:bg-background-dark/50">
            {accommodations.map((acc, index) => (
                <AccommodationCard key={acc.id} accommodation={acc} reverse={index % 2 !== 0} />
            ))}
        </section>
    );
}
