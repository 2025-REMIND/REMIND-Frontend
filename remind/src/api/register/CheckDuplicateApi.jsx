import defaultInstance from "../utils/instance";

const CheckDuplicateApi = async (loginId) => {
    try {
    const response = await defaultInstance.post('signup/checkId', { loginId });
    console.log('응답 데이터:', response.data);

    if (response.data.httpStatus === 200) {//아이디가 중복된 경우
      if(response.data.data===true){
        console.log("아이디가 중복됨!");
        return true;
      }
      else if(response.data.data===false){
        console.log("아이디가 중복되지 않음!");
        return false;
      }

    }
  } catch (error) {
    const data = error.response?.data;
    if (data?.httpStatus === 500) {
      throw new Error(data.message || "서버 오류");
    }
    throw new Error("중복 확인 실패");
  }
};

export default CheckDuplicateApi;
