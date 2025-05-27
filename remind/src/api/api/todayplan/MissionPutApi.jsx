import defaultInstance from "../../utils/instance";

const MissionPutApi = async (missionDetailId) => {
    try {
        const response = await defaultInstance(`/mission/${missionDetailId}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default MissionPutApi;