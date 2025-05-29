import defaultInstance from "../../utils/instance";

const MissionPutApi = async (missionDetailId, memberId) => {
    console.log(missionDetailId);
    try {
        const response = await defaultInstance.put(`/mission/${missionDetailId}`, {
            memberId: memberId
        });

        if (response.data.httpStatus === 200) {
            console.log("호출 성공");
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

export default MissionPutApi;