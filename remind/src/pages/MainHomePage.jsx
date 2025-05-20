import Header from "../components/home/header/Header";
import Intro from "../components/home/intro/Intro";
import PlanArchive from "../components/home/planarchive/PlanArchive";
import TodayPlan from "../components/home/todayplan/TodayPlan";
import MemoryRecord from "../components/home/memoryrecord/MemoryRecord";
import Rimi from "../components/home/rimi/Rimi";

export default function MainHomePage() {
    return (
        <>
            <Header />
            <Intro />
            <PlanArchive />
            <TodayPlan />
            <MemoryRecord />
            <Rimi />
        </>
    )
}