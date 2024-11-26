<template>
    <v-app style="background-color: #F3F3F3;">
    <v-row>
      <v-col 
      cols="12"      
        sm="6"       
        md="4"         
        lg="3"         
        v-for="(product, index) in products" 
        :key="index"
      >
        <v-card class="product-card rounded-xl" hover style="width: 100%; height: 20rem;" >
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
  export default {
    name: "ProductComponents",
    props: {
      products: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    width: 100px;
    height: 200px;
  }
  
  .price {
    font-size: 1.7rem;
    font-weight: bolder;
    color: #F1B3B3;
  }
  </style>
  