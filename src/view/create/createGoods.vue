<template>
  <v-main style="background-color: #F3F3F3;">
    <Header></Header>
    <v-main class="home-container">
      <v-container style="display: flex; justify-content: center;">
        <v-card
          class="create-card"
          style="width: 80%; height: 40rem; position: relative; border-radius: 24px;"
        >
          <v-form ref="form" v-model="isFormValid" style="margin-top: 3%;">
            <v-container>
              <v-text-field
                label="제목"
                v-model="formData.title"
                outlined
                dense
                :rules="[rules.required]"
              ></v-text-field>

              <v-textarea
                label="상세설명"
                v-model="formData.content"
                outlined
                dense
                :rules="[rules.required]"
              ></v-textarea>

              <v-text-field
                label="가격"
                v-model="formData.price"
                outlined
                dense
                type="number"
                :rules="[rules.required, rules.number]"
              ></v-text-field>

              <v-file-input
                label="이미지 파일"
                outlined
                dense
                accept="image/*"
                show-size
                v-model="formData.imageFile"
                :rules="[rules.required]"
              ></v-file-input>

              <div style="width: 100%; display: flex; flex-direction: row-reverse;">
                <v-btn
                  :disabled="!isFormValid"
                  @click="submitForm"
                  style="background-color:  #b7f1b3 !important; color: #fff !important; cursor: pointer;height: 40px; width: 100px;"
                >
                  상품 등록
                </v-btn>
              </div>
            </v-container>
          </v-form>
        </v-card>
      </v-container>
    </v-main>
  </v-main>
</template>

<script>
import Header from "@/components/header/header.vue";
import { createGoods, uploadImage } from "@/api/goods";
import showToast from "@/utils/toastService";


export default {
  name: "CreateGoodsPage",
  components: {
    Header,
  },
  data() {
    return {
      isFormValid: false,
      formData: {
        title: "",
        content: "",
        price: 0,
        imageFile: null,
      },
      rules: {
        number: (value) => !isNaN(value) || "숫자만 입력 가능합니다.",
        required: (value) => !!value || "필수 항목입니다.",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        
        const imageUrl = await uploadImage(this.formData.imageFile);

      
        const productData = {
          title: this.formData.title,
          content: this.formData.content,
          price: this.formData.price,
          imageUrl,
        };
        const res = await createGoods(productData);
        if(res.status === 201){
        showToast("상품등록 성공","success");
        }
      } catch (error) {
        showToast("상품등록 실패", "error");
      }
    },

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
