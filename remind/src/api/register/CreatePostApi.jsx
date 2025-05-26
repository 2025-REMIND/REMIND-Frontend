import defaultInstance from "../utils/instance"


const createPostApi=async(id, password)=>{
   try{
    const response=await defaultInstance.post(`post`,{
      id,
      password,
    })
    if(response.data.httpStatus===200){//로그인 성공
      console.log(response.data.message);
      return response.data.data.memberId;//18
    }
    else if(response.data.httpStatus===400){//아이디 불일치
      if(response.data.code==="USER_400_1"){
         console.log(response.data.message);
        return response.data.data;//null
      }
      else if(response.data.code="SIGNIN_400_2"){//비밀번호 불일치치
        console.log(response.data.message);
        return response.data.data;//null
      }
    }
    else if(response.data.httpStatus===500){
      console.log(response.data.message)
      return response.data.data;//null
    }
    
  }
    catch(e){
      console.error(e);
  }
}

export default createPostApi;
