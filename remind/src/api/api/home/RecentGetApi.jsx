import defaultInstance from "../../utils/instance";

const RecentGetApi = async (memberId) => {
    try {
        const response = await defaultInstance.get(`/diary/recent/${memberId}`);
        
        if (response.data.httpStatus === 200) {
            console.log("호출 성공");
            return response.data.data;
        } else if (response.data.httpStatus === 400) {
            console.log("400: 존재하지 않는 회원원");
        } else if (response.data.httpStatus === 500) {
            console.log("500: 서버 오류 발생");
        }
    } catch (e) {
        console.log(e);
    }
};

export default RecentGetApi;