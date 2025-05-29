import axios from "axios";

const BASE_URL="api/";

const defaultInstance=axios.create({
  baseURL: BASE_URL,
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }//headers:
})

export default defaultInstance;