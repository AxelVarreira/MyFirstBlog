import axios from "axios";
//Faz o link entre o back e o front
const instance = axios.create({
  baseURL: "http://localhost:8002",
});

export default instance;
