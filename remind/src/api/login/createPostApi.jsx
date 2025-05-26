import defaultInstance from "../utils/instance"


const createPostApi = async (id, password) => {
  try {
    const response = await defaultInstance.post('signin', { id, password });

    if (response.data.httpStatus === 200) {
      console.log(response.data.message);
      return response.data.code; // SUCCESS_200
    }

  } catch (error) {
    if (error.response) {
      const { code, message, httpStatus } = error.response.data;

      if (httpStatus === 400) {
        if (code === "USER_400_1") {
          console.log(message);
          return code;
        }
        if (code === "SIGNIN_400_2") {
          console.log(message);
          return code;
        }
      }
      else if (httpStatus === 500) {
        console.log(message);
        return code;
      }
    } else {
      console.error(error);
    }
  }
};


export default createPostApi;
