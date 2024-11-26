import axios from "axios";
import token from "@/lib/token";
import { REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY } from "@/constants/token.constants";
import CONFIG from "@/config/config.json";

export const apiClient = axios.create({
  baseURL: CONFIG.serverUrl,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

apiClient.interceptors.request.use(
  (config) => {
  
    const accessToken = token.getToken(ACCESS_TOKEN_KEY);
    if (accessToken) {
      config.headers[REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
  
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

  
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
      
        const refreshToken = token.getToken("REFRESH_TOKEN_KEY");
        console.log(refreshToken);
        
        const response = await axios.post(`${CONFIG.serverUrl}/auth/refresh`, {
          refreshToken,
        });

      
        const newAccessToken = response.data.accessToken;
        token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

      
        originalRequest.headers[REQUEST_TOKEN_KEY] = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
      
        console.error("토큰 갱신 실패:", refreshError);
      
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
