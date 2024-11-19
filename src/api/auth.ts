import axios from 'axios';

const apiClient = axios.create({
  baseURL: '', 
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async (id, password) => {
  try {
    const response = await apiClient.post('/login', {
      id,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || '로그인에 실패했습니다.');
  }
};

export default login;