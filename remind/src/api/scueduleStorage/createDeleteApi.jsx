import defaultInstance from "../utils/instance";

const createDeleteApi=async(suggestionId, memberId)=>{
  try{
    const response=await defaultInstance.delete(`suggestion/${suggestionId}/delete`,{
      data: { memberId },  // DELETE 요청 시 body는 data 프로퍼티에 담아야 함
    });

    if(response.data.httpStatus===200){
      return response.data;//전체 응답 반환
    }else{
      throw new Error(response.data.message||"삭제에 실패했어 ㅠㅠ");
    }

  }
  catch(e){
    if(e.response){
      const {httpStatus, code, message}=error.response.data;
      throw new Error(`${httpStatus} = ${code} : ${message}`);
    }
    throw e;
  }
}

export default createDeleteApi;