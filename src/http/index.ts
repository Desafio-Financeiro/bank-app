import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_FIAP_API,
});

export default http;
