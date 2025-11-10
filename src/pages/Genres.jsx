import GanreCard from "../components/GanreCard"
import { addSearchAndAccordion } from "../utils/genres"
import { useEffect } from "react"

export default function Genres() {
    useEffect(() => { addSearchAndAccordion() }, []);
    return (
        <main className="genre-page">
            <section className="genre-grid">
                <GanreCard ganreName="rpg" title="Role-Playing Games (RPG)" link="https://en.wikipedia.org/wiki/Role-playing_video_game" author="John Doe"/>
                <GanreCard ganreName="fps" title="First-Person Shooter (FPS)" link="https://en.wikipedia.org/wiki/First-person_shooter" author="Volter White"/>
                <GanreCard ganreName="strategy" title="Strategy" link="https://en.wikipedia.org/wiki/Strategy_video_game" author="Billie Bibbit"/>
                <GanreCard ganreName="rpg" title="Role-Playing Games (RPG)" link="https://en.wikipedia.org/wiki/Role-playing_video_game" author="John Doe"/>
                <GanreCard ganreName="fps" title="First-Person Shooter (FPS)" link="https://en.wikipedia.org/wiki/First-person_shooter" author="Volter White"/>
                <GanreCard ganreName="strategy" title="Strategy" link="https://en.wikipedia.org/wiki/Strategy_video_game" author="Billie Bibbit"/>
                <GanreCard ganreName="rpg" title="Role-Playing Games (RPG)" link="https://en.wikipedia.org/wiki/Role-playing_video_game" author="John Doe"/>
                <GanreCard ganreName="fps" title="First-Person Shooter (FPS)" link="https://en.wikipedia.org/wiki/First-person_shooter" author="Volter White"/>
                <GanreCard ganreName="strategy" title="Strategy" link="https://en.wikipedia.org/wiki/Strategy_video_game" author="Billie Bibbit"/>
            </section>
        </main>
    )
}