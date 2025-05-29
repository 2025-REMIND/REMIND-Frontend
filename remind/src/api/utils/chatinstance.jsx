import axios from "axios";
const BASE_URL="api/";

const defaultInstance=axios.create({
  baseURL: BASE_URL,
  
})

export default defaultInstance;