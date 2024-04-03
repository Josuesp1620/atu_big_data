import axios from "axios";

export const http = axios.create({
  baseURL: process.env.API_AUTH_URL,
  headers: {
    Accept: "application/json"
  },
});
