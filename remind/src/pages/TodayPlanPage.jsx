import Header from "../components/todayplan/header/Header";
import Mission from "../components/todayplan/mission/Mission";
import Suggest from "../components/todayplan/suggest/Suggest";
import Comment from "../components/todayplan/comment/Comment";

export default function TodayPlanPage() {
    return (
        <>
            <Header />
            <Mission />
            <Suggest />
            <Comment />
        </>
    )
}