import Header from "../components/todayplan/header/Header";
import Mission from "../components/todayplan/mission/Mission";
import Suggest from "../components/todayplan/suggest/Suggest";
import Comment from "../components/todayplan/comment/Comment";
import { useEffect, useState } from "react";
import suggestionGetApi from "../api/api/todayplan/suggestionGetApi";

export default function TodayPlanPage() {
    const [suggestionId, setSuggestionId] = useState(null);

    useEffect(() => {
        const fetchSuggestion = async () => {
            const memberId = Number(localStorage.getItem("userId"));
            const data = await suggestionGetApi(memberId);

            if (data?.suggestionId) {
                setSuggestionId(data.suggestionId);
            }
        };

        fetchSuggestion();
    }, []);
    
    return (
        <>
            <Header />
            <Mission />
            <Suggest />
            <Comment suggestionId = { suggestionId }/>
        </>
    )
}