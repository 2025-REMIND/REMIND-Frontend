import defaultInstance from "../../utils/instance";

const CourseGetApi = async (memberId, courseId) => {
    try {
        const response = await defaultInstance.get(`/course/${memberId}/${courseId}`);

        if (response.data.httpStatus === 200) 
            return response.data.data;
        else console.log("실패", response.data.message);
    } catch (e) {
        console.log(e);
    }
};

export default CourseGetApi;