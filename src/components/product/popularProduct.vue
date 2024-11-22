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
          <v-card
            class="product-card rounded-xl"
            hover
            style="width: 100%; height: 20rem; position: relative;"
          >
            <div
              v-if="index < 3"
              :class="['rating', getRatingClass(index)]"
            >
              {{ index + 1 }}
            </div>
            <v-img :src="product.image" height="60%"></v-img>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>{{ product.content }}</v-card-subtitle>
            <v-card-text>
              <div class="price">{{ product.prize }} POINT</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </template>
  
  <script>
  export default {
    name: "PopularProduct",
    props: {
      products: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
    methods: {
      getRatingClass(index) {
        switch (index) {
          case 0:
            return "rating-first";
          case 1:
            return "rating-second";
          case 2:
            return "rating-third";
          default:
            return "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    width: 100px;
    height: 200px;
  }
  
  .rating {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
  }
  
  
  .rating-first {
    background-color: #FFDF6F; 
  }
  
  .rating-second {
    background-color: #B7F1B3;
  }
  
  .rating-third {
    background-color: #F1B3B3; 
  }
  
  .price {
    font-size: 1.7rem;
    font-weight: bolder;
    color: #f1b3b3;
  }
  </style>
  