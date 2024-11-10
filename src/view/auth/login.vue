<template>
  <v-main  >
    <v-layout style="--v-layout-left: 0px;--v-layout-right: 0px;--v-layout-top: 0px;--v-layout-bottom: 0px;min-height:100vh"  fill-height>
  <v-container class="v-locale--is-ltr h-100 pa-16 pa-md-4 " style="display:  flex; justify-content: center;align-items: center;">
      <div class="v-row" style="width: 70%; height: 100%;display:  flex; justify-content: center;align-items: center;">
        <v-card class="w-50 d-flex align-center " style="width: 100%; height: 70%; display: flex; align-items: center;">
          <v-row class="md-6 ">
        <v-col class="v-col-md-6 v-col-12 "  style="display:  flex; justify-content: center;align-items: center;">
          <img src="@/assets/img/WiiT.svg" alt="">
        </v-col>
        <v-col class="mx-40">
          <v-sheet>
          <v-card-title id="v-card-title" class="text-center" >LOGIN</v-card-title>
          <v-card-text>
            <v-form ref="loginForm" style="display: flex; flex-direction:column; gap: 20px;" v-model="valid">
              <TextField
              v-model="id"
              :name="'id'"
              :placeholder="'아이디를 입력해주세요'"
              :type="'text'"
              :rules="[rules.required, rules.id]"
              @input="handleInput"
              @keydown="handleKeyDown"
              />
              <TextField
              v-model="password"
              :name="'password'"
              :placeholder="'비밀번호를 입력해주세요'"
              :type="'password'"
              :rules="[rules.required, rules.id]"
              @input="handleInput"
              @keydown="handleKeyDown"
              />
            </v-form>
          </v-card-text>
          
          <v-card-actions>
            <v-btn class="w-80" style="background-color: #B7F1B3; color: white; height: 48px; font-size: 16px; font-weight: 600; border-radius: 12px;"  @click="login" :disabled="!valid">로그인</v-btn>
          </v-card-actions>
        </v-sheet>
        </v-col>
      </v-row>
      </v-card>
      </div>
  </v-container>
</v-layout>
</v-main>
</template>

<script>
import TextField from '@/components/textfield/textField.vue';
export default {
  name: 'LoginComponent',
  components: {
    TextField,
  },
  data() {
    return {
      id: '',
      password: '',
      valid: false,
      rules: {
        required: v => !!v || 'This field is required',
        id: v => /.+@.+\..+/.test(v) || 'ID must be valid',
        min: v => (v && v.length >= 6) || 'Password must be at least 6 characters'
      }
    };
  },
  methods: {
    login() {
      if (this.$refs.loginForm.validate()) {
        alert("log")
        console.log(this.id, this.password);
      }
    }
  }
};
</script>

<style scoped>
.v-container {
  background-color: #f5f5f5;
}
.v-card__actions {
  width: 100%;
  height: 20%;
}
.v-btn {
  width: 100%;
  padding: 12px;
}
#v-card-title{
  color: var(--Primary2, #B7F1B3);
  display: flex;
  justify-content: center;
  font-family: "Cafe24 Decozoo";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 50px;
}
</style>
