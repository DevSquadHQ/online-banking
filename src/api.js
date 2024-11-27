import axios from "axios";

const api = axios.create({
  baseURL: "https://internetbank3.liara.run", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
