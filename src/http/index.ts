import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ?? "https://json-server-api-mu.vercel.app",
});

export default http;
