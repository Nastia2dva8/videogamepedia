import Aside from "../components/Aside"
import InfoSection from "../components/InfoSection"
import Table from "../components/Table"
import { data } from "../utils/infoSectionData"
import { useEffect } from "react"
import { snowflakesFall, adjustMenuLayout } from "../utils/main"

export default function Home() {
    useEffect(() => { 
        snowflakesFall(); 
        adjustMenuLayout();
    }, []);
    return (
        <main className="main">
            <article>
                <InfoSection sectionName={data[0].sectionName} title={data[0].title} content={data[0].content} />
                <InfoSection sectionName={data[1].sectionName} title={data[1].title} content={data[1].content} />
                <InfoSection sectionName={data[2].sectionName} title={data[2].title} content={data[2].content} />
                <InfoSection sectionName={data[3].sectionName} title={data[3].title} content={data[3].content} />
                <Table />
            </article>
            <Aside />
        </main>
    )
}