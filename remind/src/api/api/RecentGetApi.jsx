import defaultInstance from "../utils/instance";

const RecentGetApi = async (memberId) => {
    try {
        const response = await defaultInstance.get(`/diary/recent/${memberId}`);
        
        if (response.data.httpStatus === 200) 
            return response.data.data;
    } catch (e) {
        console.log(e);
    }
};

export default RecentGetApi;