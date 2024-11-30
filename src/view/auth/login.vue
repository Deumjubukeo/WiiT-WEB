<template>
  <v-main>
    <v-layout
      style="--v-layout-left: 0px; --v-layout-right: 0px; --v-layout-top: 0px; --v-layout-bottom: 0px; min-height: 100vh"
      fill-height
    >
      <v-container
        class="v-locale--is-ltr h-100 pa-16 pa-md-4"
        style="display: flex; justify-content: center; align-items: center;"
      >
        <div
          class="v-row"
          style="width: 70%; height: 100%; display: flex; justify-content: center; align-items: center;"
        >
          <v-card
            class="w-50 d-flex align-center"
            style="width: 100%; height: 70%; display: flex; align-items: center;"
          >
            <v-row class="md-6">
              <v-col
                class="v-col-md-6 v-col-12"
                style="display: flex; justify-content: center; align-items: center;"
              >
                <img src="@/assets/img/WiiT.svg" alt="" />
              </v-col>
              <v-col class="mx-40">
                <v-sheet>
                  <v-card-title id="v-card-title" class="text-center">
                    LOGIN
                  </v-card-title>
                  <v-card-text>
                    <v-form
                      ref="loginForm"
                      style="display: flex; flex-direction: column; gap: 20px;"
                      @submit.prevent="handleSubmit"
                    >
                    <TextField
                        :value="loginData.userId"
                        @updateState="(value) => (loginData.userId = value)"
                        :name="'Id'"
                        placeholder="아이디를 입력해주세요"
                        type="text"
                      />
                      <TextField
                        :value="loginData.password"
                        @updateState="(value) => (loginData.password = value)"
                        :name="'Password'"
                        placeholder="비밀번호를 입력해주세요"
                        type="password"
                      />
                    </v-form>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      class="w-80"
                      style="
                        background-color: #b7f1b3;
                        color: white;
                        height: 48px;
                        font-size: 16px;
                        font-weight: 600;
                        border-radius: 12px;
                      "
                      @click="handleSubmit"
                      :disabled="!isValid"
                    >
                      로그인
                    </v-btn>
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
import { defineComponent} from "vue";
import TextField from "@/components/textfield/textField.vue";
import login from "@/api/auth";
import showToast from "@/utils/toastService"; 
import token from "@/lib/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token.constants";

export default defineComponent({
  name: "LoginComponent",
  components: {
    TextField,
  },
  data() {
    return {
      loginData: {
        userId: "",
        password: "",
      },
    };
  },
  computed: {
    isValid() {
      return this.loginData.userId !== "" && this.loginData.password !== "";
    },
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await login(this.loginData.userId, this.loginData.password);  
        console.log(res);
        if (res.status) {
          token.setToken(ACCESS_TOKEN_KEY, res.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, res.data.refreshToken);
          
          showToast("로그인 성공", "success", 3000);
          
          // 로그인 성공 후, 라우터 이동
          this.$router.push("/");  // 루트 페이지로 이동
        }
      } catch (error) {
        showToast("로그인 실패", "error", 3000);
        console.error(error);
      }
    },
  },
});
</script>

<style>
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
#v-card-title {
  color: var(--Primary2, #b7f1b3);
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
