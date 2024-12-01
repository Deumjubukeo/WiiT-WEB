<template>
    <v-app >
      <v-row>
        <v-col 
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(product, index) in products" 
          :key="index"
        >
          <v-card 
            class="product-card rounded-xl" 
            hover 
            style="width: 100%; height: 20rem;" 
            @click="handleDelete(product.id, product.title)" 
          >
            <v-img :src="product.imageUrl" height="60%"></v-img>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>{{ product.content }}</v-card-subtitle>
            <v-card-text>
              <div class="price">{{ product.price }} POINT</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </template>
  
  <script>
  import { goodsList, deleteGoods } from "@/api/goods"; 
  import showToast from "@/utils/toastService";
  
  export default {
    name: "ProductComponents",
    data() {
      return {
        products: [], 
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const data = await goodsList(1, 10); 
          this.products = data.data; 
        } catch (error) {
          showToast("상품 데이터를 가져오는 데 실패했습니다.", "error");
        }
      },
      async handleDelete(productId, productTitle) {
        const confirmed = confirm(`'${productTitle}' 상품을 정말 삭제하시겠습니까?`);
        if (confirmed) {
          try {
            const res = await deleteGoods(productId); 
            if (res.status === 200) {
              this.products = this.products.filter(
                (product) => product.id !== productId
              ); 
              showToast("삭제 성공", "success");
            }
          } catch (error) {
            showToast("삭제 실패", "error");
          }
        }
      },
    },
    mounted() {
      this.fetchProducts(); 
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    width: 30%;
    height: 30rem;
  }
  
  .price {
    font-size: 1.7rem;
    font-weight: bolder;
    color: #F1B3B3;
  }
  </style>
  