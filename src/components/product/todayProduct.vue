<template>
  <v-app style="background-color: #fff; border-radius: 20px; padding: 30px;">
    <h2 style="margin-bottom: 10px;">오늘의 인기 상품</h2>
      <v-row>
        <v-col
          v-for="(product, index) in limitedProducts"
          :key="index"
        >
          <v-card
            class="product-card rounded-xl"
            hover
            style="width: 100%; height: 20rem; position: relative;"
          >
            <v-img :src="product.image" height="60%" contain></v-img>
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
import { popularGoodsList } from "@/api/goods";

export default {
  name: "TodayProduct",
  data() {
    return {
      page: 1,
      size: 10,
      products: [], 
    };
  },
  computed: {
    
    limitedProducts() {
      return this.products.slice(0, 4); 
    },
  },
  methods: {
    async fetchProducts() {
      try {
        const data = await popularGoodsList(this.page, this.size);
        this.products = data.data;
        console.log(this.products);
        
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

<style scoped>
.product-card {
  width: 100%;
  height: 20rem;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #f1b3b3;
}
.v-application--wrap {
  border-radius: 10px;
}
</style>
