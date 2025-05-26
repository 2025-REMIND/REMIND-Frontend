import defaultInstance from "../utils/instance";

const ImagePostApi = async (suggestionId, images) => {
    try {
        const form = new FormData();

        images.forEach((file) => {
            form.append("images", file);
        });

        const response = await defaultInstance.post(`/suggestion/${suggestionId}/image`,
            form
        );

        if (response.data.httpStatus === 200) {
            console.log("업로드 성공", response.data.data.imageUrls);
            return true;
        } else {
            console.log("응답 실패", response.data.messages);
            return false;
        }
    } catch (e) {
        console.log(e);
    }
};

export default ImagePostApi;