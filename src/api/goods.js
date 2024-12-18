import { apiClient } from "./axios";
import showToast from "@/utils/toastService";

export const deleteGoods = async (productId) => {
  try {
    const response = await apiClient.delete(`/goods/${productId}`);
    return response;
  } catch (error) {
    showToast("상품 삭제에 실패했습니다.", "error");
    throw error;
  }
};

export const goodsList = async (page, size) => {
  try {
    const response = await apiClient.get("/goods/list", {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("상품 데이터를 가져오는 중 오류 발생:", error);
    throw error;
  }
};

export const popularGoodsList = async (page, size) => {
  try {
    const res = await apiClient.get("/goods/popular", {
      params: { page, size },
    });
    return res.data;
  } catch (error) {
    console.error("인기 상품 데이터 오류 발생:", error);
    throw error;
  }
};

export const createGoods = async (goodsData) => {
  try {
    const response = await apiClient.post("/goods/create", goodsData);
    return response;
  } catch (error) {
    console.error("상품 등록 중 오류 발생:", error);
    throw error;
  }
};

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await apiClient.post("/aws/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.url;
  } catch (error) {
    console.error("이미지 업로드 중 오류 발생:", error);
    throw error;
  }
};

export const purchaseGoods = async (productId, userId) => {
  try {
    const response = await apiClient.post(
      `/goods/purchase?id=${productId}&userId=${userId}`
    );
    return response;
  } catch (error) {
    showToast("구매 실패", "error");
    throw error;
  }
};
