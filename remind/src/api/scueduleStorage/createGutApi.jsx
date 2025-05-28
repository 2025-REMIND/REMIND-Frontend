import defaultInstance from "../utils/instance";

const createGutApi = async (memberId, page = 0, size = 1) => {
  try {
    const response = await defaultInstance.get(`suggestion/${memberId}`, {
      params: { page, size },
    });

    if (response.data.httpStatus === 200) {
      console.log("통신 성공");
      return response.data.data;
    } else {
      throw new Error(response.data.message || '데이터 로딩 실패');
    }
  } catch (error) {
    const data = error.response?.data;

    if (!data) {
      console.error('API 호출 실패 (네트워크 또는 기타 문제):', error);
      throw new Error('네트워크 오류가 발생했습니다.');
    }

    switch (data.httpStatus) {
      case 400:
        if (data.code === 'SIGNIN_400_1') {
          console.error('존재하지 않는 사용자입니다.');
          throw new Error(data.message);
        }
        break;
      case 404:
        console.error('404 NOT FOUND:', data.message);
        throw new Error(data.message || '데이터를 찾을 수 없습니다.');
      case 500:
        console.error('서버 내부 오류:', data.message);
        throw new Error(data.message || '서버 오류가 발생했습니다.');
      default:
        console.error('알 수 없는 오류:', data.message);
        throw new Error(data.message || '알 수 없는 오류가 발생했습니다.');
    }
  }
};

export default createGutApi;
