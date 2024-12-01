<template>
  <Portal>
    <div v-if="isVisible" :style="{ zIndex: zIndex || 1000 }" class="modal-wrapper" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="product.imageUrl" alt="img">
        <h2>{{ product.title }}</h2>
        <p>{{ product.content }}</p>
        <div class="price">{{ product.price }} POINT</div>

       
        <QRScanner v-if="isScanning" ref="qrScanner" @scan="onQRCodeScanned" />

       
        <v-btn class="white--text" @click="startQRScan" color="#b7f1b3">구입하기</v-btn>
      </div>
    </div>
  </Portal>
</template>

<script>
import QRScanner from "@/components/QR/QRscanner.vue";
import { purchaseGoods } from "@/api/goods";
import showToast from "@/utils/toastService";

export default {
  name: "ModalComponents",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isScanning: false, 
    };
  },
  methods: {
    closeModal() {
      this.$emit("close"); 
      this.isScanning = false; 
    },

    onQRCodeScanned(id) {
      const userId = id.split("_")[1];
      this.purchaseProduct(userId);
    },

   
    startQRScan() {
      this.isScanning = true; 
      const qrScanner = this.$refs.qrScanner;
      if (qrScanner) {
        qrScanner.startScanning(); 
      }
    },

    async purchaseProduct(userId) {
      try {
        const res = await purchaseGoods(this.product.id, userId);
        if (res.status === 201) {
          showToast("결제성공", "success");
          this.closeModal();
        }else if (res.status === 400) {
          showToast("포인트 부족", "error");
          this.closeModal();
        }
      } catch (error) {
        showToast("결제실패", "error");
      }
    },
  },
  components: {
    QRScanner,
  },
};
</script>

<style>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  min-width: 300px;
  min-height: 200px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  z-index: 1010;
}

.price {
  font-size: 1.7rem;
  font-weight: bolder;
  color: #F1B3B3;
}
</style>
