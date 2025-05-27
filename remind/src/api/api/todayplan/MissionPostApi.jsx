import defaultInstance from "../../utils/instance";

const MissionPostApi = async (missionId, data) => {
    try {
        const response = await defaultInstance.post(`/mission/${missionId}`, data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default MissionPostApi;