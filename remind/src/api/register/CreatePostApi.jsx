import defaultInstance from "../utils/instance";

const createPostApi = async (id, password) => {
  try {
    const response = await defaultInstance.post('signup', { id, password });

    if (response.data.httpStatus === 200) {
      console.log(response.data.message);
      return response.data.code; // "SUCCESS_200" 등
    }

    // 200 이외의 상태는 에러로 처리 (선택사항)
    throw new Error(response.data.message || '회원가입 실패');
  } catch (error) {
    if (error.response && error.response.data) {
      // 서버가 보낸 메시지로 에러 던지기
      throw new Error(error.response.data.message);
    }
    // 네트워크 등 기타 에러 던지기
    throw error;
  }
};

export default createPostApi;
