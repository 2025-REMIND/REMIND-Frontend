import defaultInstance from "../utils/chatinstance";

const createPostApi = async (memberId, content, imageFile = null) => {
  const formData = new FormData();

  const jsonBlob = new Blob(
    [JSON.stringify({ memberId: Number(memberId), content })],
    { type: "application/json" }
  );
  formData.append("data", jsonBlob);

  if (imageFile) {
    formData.append("image", imageFile);
  }
  formData.forEach((value, key) => {
  console.log(`${key}:`, value);
  });

  try {
    const response = await defaultInstance.post("/chat", formData); // headers 생략 → 자동 처리
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
    if (response.data.httpStatus === 200) {
      return response.data.data.content;
    }
  } catch (error) {
    const res = error.response;
    if (res) {
      switch (res.data.httpStatus) {
        case 400:
          console.error("요청 오류 400:", res.data.message);
          return res.data.message;
        case 404:
          console.error("요청 오류 404:", res.data.message);
          return res.data.message;
        case 500:
          console.error("서버 오류 500:", res.data.message);
          return res.data.message;
        default:
          console.error("알 수 없는 오류:", res.data.message);
          return "예상치 못한 오류입니다.";
      }
    } else {
      console.error("네트워크 오류 또는 응답 없음:", error);
      return "네트워크 오류가 발생했습니다.";
    }
  }
};

export default createPostApi;
