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
          style="width: 100%; height: 20rem;" 
          @click="showModal(product)" 
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
    
    <Modal 
      :product="selectedProduct"  
      :isVisible="isModalVisible" 
      @close="closeModal"
    ></Modal>
  </v-app>
</template>

<script>
import Modal from '../modal/modal.vue';

export default {
  name: "ProductComponents",
  components: {
    Modal,
  },
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      selectedProduct: null, 
      isModalVisible: false, 
    };
  },
  methods: {
    showModal(product) {
      this.selectedProduct = product;
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 100%;
  height: 200px;
}

.price {
  font-size: 1.7rem;
  font-weight: bolder;
  color: #F1B3B3;
}
</style>
