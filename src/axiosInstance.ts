import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.26:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

export default instance;
