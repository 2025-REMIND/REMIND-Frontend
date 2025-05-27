import defaultInstance from "../utils/instance";

const createPostApi = async (id, password) => {
  try {
    const response = await defaultInstance.post('signin', { id, password });
    if (response.data.httpStatus === 200) {
      console.log(response.data.message);
      return { success: true, code: response.data.code, data: response.data.data };
    }
  } catch (error) {
    if (error.response) {
      const { code, message, httpStatus } = error.response.data;

      // 400, 500 에러에 대해 메시지와 코드를 같이 반환
      return {
        success: false,
        code,
        message,
        httpStatus
      };
    } else {
      // 네트워크 오류 등
      return {
        success: false,
        code: 'NETWORK_ERROR',
        message: '네트워크 오류가 발생했습니다.'
      };
    }
  }
};

export default createPostApi;
