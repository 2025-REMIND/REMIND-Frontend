import defaultInstance from "../utils/instance";

const suggestionGetApi = async (memberId) => {
    try {
        const response = await defaultInstance.get(`/suggestion/today/${memberId}`);

        if (response.data.httpStatus === 200) {
            return response.data.data;
        } else {
            console.error("정보 호출 실패", response.data.message);
            return null;
        }
    } catch (e) {
        console.log(e);
    }
};

export default suggestionGetApi;