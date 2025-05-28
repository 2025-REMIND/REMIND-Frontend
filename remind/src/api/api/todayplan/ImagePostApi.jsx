import defaultInstance from "../../utils/instance";

const ImagePostApi = async (suggestionId, images) => {
    try {
        const form = new FormData();

        images.forEach((file) => {
            form.append("images", file);
        });

        const response = await defaultInstance.post(`/suggestion/${suggestionId}/image`,
            form,
    {
        headers: {
            'Content-Type': undefined,
        },
    }
        );

        if (response.data.httpStatus === 200) {
            console.log("업로드 성공", response.data.data.imageUrls);
            return true;
        } else if (response.data.httpStatus === 400) {
            console.log("400: 존재하지 않는 제안");
            return false;
        } else if (response.data.httpStatus === 500) {
            console.log("500: 서버 내부 오류");
        }
    } catch (e) {
        console.log(e);
    }
};

export default ImagePostApi;