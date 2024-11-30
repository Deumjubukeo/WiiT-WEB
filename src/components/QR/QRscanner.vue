<template>
  <div class="qr-scanner">
    <qrcode-stream @decode="onDecode" @init="onInit" @error="onError">
      <div class="loading">카메라 로딩 중...</div>
    </qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  name: "QRScanner",
  components: {
    QrcodeStream,
  },
  methods: {
    onDecode(decodedString) {
      this.$emit("scan", decodedString);
    },
    onInit(promise) {
      promise.catch((error) => {
        console.error("카메라 초기화 실패:", error);
      });
    },
    onError(error) {
      console.error("QR 코드 스캔 중 에러:", error);
    },
  },
};
</script>

<style scoped>
.qr-scanner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
  margin-bottom: 10px;
}

.loading {
  text-align: center;
  color: #666;
}
</style>
