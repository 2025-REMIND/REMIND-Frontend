import axios from "axios";
const BASE_URL="";

const defaultInstance=azios.create({
  baseURL: BASE_URL,
  header:{
    'Content-Type':'application/json; charset=UTF-8'
  }//headers:
})

export default defaultInstance;