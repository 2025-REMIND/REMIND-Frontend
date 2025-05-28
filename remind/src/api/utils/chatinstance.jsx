import axios from "axios";
const BASE_URL="http://15.164.127.197:8080/api/";

const defaultInstance=axios.create({
  baseURL: BASE_URL,
  
})

export default defaultInstance;