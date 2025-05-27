import defaultInstance from "../../utils/instance";

const CoursePutApi = async (courseDetailId) => {
    try {
        const response = await defaultInstance.patch(`/course/${courseDetailId}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default CoursePutApi;