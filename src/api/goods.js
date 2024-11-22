import { apiClient } from "./axios";

export const goodsList = async (page, size) => {
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


export const popularGoodsList = async(page, size)=>{
  try{
    const res = await apiClient.get('/goods/popular',{
      params:{page,size},
    })
    return res.data;
  }catch(error){
    console.log('인기 상품데이터 에러',error);
    throw error;
    
  }
}