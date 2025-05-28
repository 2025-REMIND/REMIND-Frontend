import defaultInstance from "../../utils/instance";

const suggestionGetApi = async (memberId) => {
    try {
        const response = await defaultInstance.get(`/suggestion/today/${memberId}`);

        if (response.data.httpStatus === 200) {
            console.log("200: 호출 성공");
            return response.data.data;
        } else if (response.data.httpStatus === 500) {
            console.error("500: 서버 내부 오류", response.data.message);
            return null;
        }
    } catch (e) {
        console.log(e);
    }
};

export default suggestionGetApi;