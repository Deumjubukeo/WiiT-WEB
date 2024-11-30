import { apiClient } from "./axios";


const login = async (userId, password)=> {
  try {
    const response = await apiClient.post('/auth/signin', { userId, password });
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || '로그인에 실패했습니다.');
  }
};


export default login;