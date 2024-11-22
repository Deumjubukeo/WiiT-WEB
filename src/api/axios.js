import axios from 'axios';
import token from '@/lib/token';
import { REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY } from "@/constants/token.constants";
// import CONFIG from "@/config/config.json";

export const apiClient = axios.create({
  baseURL: "", 
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});