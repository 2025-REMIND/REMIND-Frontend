import defaultInstance from "../../utils/instance";

const diaryPostApi = async (memberId, content, song, image) => {
    try {
        const form = new FormData();

        const json = JSON.stringify({ memberId, content, song });
        const blob = new Blob([json], { type: "application/json" });
        form.append("data", blob);

        if (image && image.length > 0) {
            form.append("image", image[0]);
        }

        const response = await defaultInstance.post(`/diary`, form, {
        headers: {
            'Content-Type': undefined,
        },
    });

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