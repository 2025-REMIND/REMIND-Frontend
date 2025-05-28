import defaultInstance from "../../utils/instance";

const diaryPostApi = async (memberId, content, song, images) => {
    try {
        const form = new FormData();

        form.append(
            "data",
            new Blob([JSON.stringify({ memberId, content, song })], {
                type: "application/json",
            })
        );

        images.forEach((file) => {
            form.append("image", file);
        });

        const response = await defaultInstance.post(`/diary`, form);

        if (response.data.httpStatus === 200) {
            console.log("저장 성공");
            return response.data.data.diaryId;
        } else if (response.data.httpStatus === 400) {
            console.log("400: 잘못된 요청");
        } else if (response.data.httpStatus === 500) {
            console.log("500: 서버 오류 발생");
        }
    }   catch (e) {
            console.log(e);
        }
};

export default diaryPostApi;