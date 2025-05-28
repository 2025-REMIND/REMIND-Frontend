import defaultInstance from "../utils/instance";

const createPostApi = async (memberId, content) => {
  try {
    const response = await defaultInstance.post('chat', { memberId, content });
    if(response.data.httpStatus === 200){
      console.log("통신 성공");
      return response.data.data.content; // 질문내용
    }
  } catch (error) {
    const res = error.response;
    if (res) {
      if(res.data.httpStatus === 400){
        console.log("통신 실패 : 400");
        return res.data.message; // 통신 오류 메시지
      }
      else if(res.data.httpStatus === 404){
        console.log("통신 실패 : 404");
        return res.data.message;
      }
      else if(res.data.httpStatus === 500){
        console.log("심각한 통신 문제 : 500");
        return res.data.message;
      }
      else {
        console.log("그 외 오류");
        return "이상한 오류";
      }
    } else {
      console.error("네트워크 오류 또는 응답이 없습니다.", error);
      return "네트워크 오류가 발생했습니다.";
    }
  }
};


export default createPostApi;
