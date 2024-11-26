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
import { createGoods } from "@/api/goods";

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
        price: null,
        imageFile: null, 
      },
      rules: {
        number: (value) =>
          !isNaN(value) || "숫자만 입력 가능합니다.",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append("title", this.formData.title);
        formData.append("content", this.formData.content);
        formData.append("price", this.formData.price);
        formData.append("image", this.formData.imageFile); 

         await createGoods(formData);

        
      } catch (error) {
        console.error("상품 등록 중 오류 발생:", error);
        alert("상품 등록에 실패했습니다.");
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
  