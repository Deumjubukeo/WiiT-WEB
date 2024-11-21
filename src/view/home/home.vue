<template>
  <v-main style="background-color: #F3F3F3;" > 
    <Header></Header>
    <v-main  class="home-container">
      <Product :products="products" />
    </v-main>
  </v-main>
</template>

<script>
import Header from "@/components/header/header.vue";
import Product from "@/components/product/product.vue";
import { goodsLost } from "@/api/goods.js";

export default {
  name: "HomeComponents",
  components: {
    Header,
    Product,
  },
  data() {
    return {
      products: [], 
      page: 1,
      size: 10, 
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const data = await goodsLost(this.page, this.size);
        this.products = data.data || []; 
        
      } catch (error) {
        console.error("상품 데이터를 가져오는 중 오류 발생:", error);
      }
    },
  },
  mounted() {
    this.fetchProducts(); 
  },
};
</script>

<style>
.home-container {
  min-width: 300px;
  height: 100vh; 
  margin-top: 10px; 
  padding: 2rem !important;

}
</style>
