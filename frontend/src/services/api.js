import axios from "axios";

const api = axios.create({
  baseURL: "http://3.111.197.146:5001/api"
});

api.interceptors.request.use((config)=>{

  const token =
  localStorage.getItem("token");

  if(token){

    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export default api;
