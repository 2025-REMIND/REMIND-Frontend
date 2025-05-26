import defaultInstance from "../utils/instance";

const CheckDuplicateApi = async (id) => {
   try{
    const response=await defaultInstance.post(`signup`,{
      id,
      password,
    })    
  }
    catch(error){
      const { code, message, httpStatus } = error.response.data;
      
      if (httpStatus === 409) {
        console.log(message);
        return message;
      }
     else {
      console.error(error);
    }
  }
}
export default CheckDuplicateApi;
