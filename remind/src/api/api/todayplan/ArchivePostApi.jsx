import defaultInstance from "../../utils/instance";

const ArchivePostApi = async (suggestionId, memberId) => {
    try {
        const response = await defaultInstance.post(`/suggestion/${suggestionId}/archive`, {
            memberId
        });

        if (response.data.httpStatus === 200) {
            console.log("저장 성공");
            return response.data.isSuccess;
        } else if (response.data.httpStatus === 403) {
            console.log("403: 사용자의 제안이 아님");
        } else if (response.data.httpStatus === 404) {
            console.log("404: 존재하지 않는 사용자 또는 제안");
        } else if (response.data.httpStatus === 500) {
            console.log("500: 서버 오류 발생");
        }
    } catch (e) {
        console.log(e);
    }
};

export default ArchivePostApi;