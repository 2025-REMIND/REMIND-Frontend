import defaultInstance from "../utils/instance";

const createPostApi = async (memberId, content) => {
  try {
    const response = await defaultInstance.post('chat', { memberId, content });
    if(response.data.httpStatus===200){
      console.log("통신 성공");
      return response.data.data.content;//질문내용
    }
  } catch (error) {
    if(response.data.httpStatus===400){
      console.log("통신 실패 : 400");
      return response.data.message;//통신 오류 메시지
    }
    else if(response.data.httpStatus===404){
      console.log("통신 실패 : 404");//통신 오류 메시지지
      return response.data.message;
    }
    else if(response.data.httpStatus===500){
      console.log("심각한 통신 문제 : 500");
      return response.data.message;
    }
    else{
      console.log("그 외 오류");
      return "이상한 오류";
    }
  }
};

export default createPostApi;
