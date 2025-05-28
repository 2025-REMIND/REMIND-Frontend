import defaultInstance from "../../utils/instance";

const MissionGetApi = async (memberId, missionId) => {
    try {
        const response = await defaultInstance.get(`/mission/${memberId}/${missionId}`);

        if (response.data.httpStatus === 200) {
            console.log("조회 성공");
            return response.data.data;
        } else if (response.data.httpStatus === 403) {
            console.log("403: 사용자의 미션이 아님");
        } else if (response.data.httpStatus === 404) {
            console.log("404: 존재하지 않는 사용자 또는 미션");
        } else if (response.data.httpStatus === 500) {
            console.log("500: 서버 오류 발생");
        }
    } catch (e) {
        console.log(e);
    }
};

export default MissionGetApi;