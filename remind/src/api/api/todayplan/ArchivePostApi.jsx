import defaultInstance from "../../utils/instance";

const ArchivePostApi = async (suggestionId, memberId) => {
    try {
        const response = await defaultInstance.post(`/suggestion/${suggestionId}/archive`, {
            memberId
        });

        return response.data.isSuccess;        
    } catch (e) {
        console.log(e);
    }
};

export default ArchivePostApi;