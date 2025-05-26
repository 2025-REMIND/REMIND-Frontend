import defaultInstance from "../utils/instance"


const createPostApi=async( id, password)=>{
   try{
    const response=await defaultInstance.post(`/signup`,{
      id,
      password,
    })
    if(response.data.httpStatus===200){//회원가입 성공
      console.log(response.data.message);
      return response.data.data;//null
    }
    
  }
    catch(e){
      const { code, message, httpStatus } = error.response.data;

      if (httpStatus === 400) {
        if (code === "GLOBAL_400_2") {
          console.log(message);
          return code;
        }
        if (code === "GLOBAL_400_2") {
          console.log(message);
          return code;
        }
        if (code === "GLOBAL_400_2") {
          console.log(message);
          return code;
        }
        if (code === "GLOBAL_400_2") {
          console.log(message);
          return code;
        }

      }
      else if (httpStatus === 500) {
        console.log(message);
        return code;
      }
     else {
      console.error(error);
    }
  }
}

export default createPostApi;
