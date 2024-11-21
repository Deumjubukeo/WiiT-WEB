import { apiClient } from "./axios";

export const goodsLost = async (page, size) => {
    try {
      const response = await apiClient.get('/goods/list', {
        params: { page, size },
      });
      return response.data; 
    } catch (error) {
      console.error("상품 데이터를 가져오는 중 오류 발생:", error);
      throw error;
    }
  };