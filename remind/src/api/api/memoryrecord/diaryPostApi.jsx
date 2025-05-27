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
        }
    }   catch (e) {
            console.log(e);
        }
};

export default diaryPostApi;