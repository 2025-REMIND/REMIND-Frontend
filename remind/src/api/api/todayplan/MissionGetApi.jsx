import defaultInstance from "../../utils/instance";

const MissionGetApi = async (memberId, missionId) => {
    try {
        const response = await defaultInstance.get(`/mission/${memberId}/${missionId}`);

        if (response.data.httpStatus === 200) 
            return response.data.data;
        else console.log("실패", response.data.message);
    } catch (e) {
        console.log(e);
    }
};

export default MissionGetApi;