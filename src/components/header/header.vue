<template>
  <v-app>
    <v-app-bar
      :elevation="0"
      style="display: flex; justify-content: space-between; background-color: #fff; width: 100%; height:64px;"
    >
      <template>
        <h4 id="logo" @click="handleLogoClick">WiiT</h4>
      </template>
      <div class="buttonBox">
        <v-app-bar-title>
          <v-btn
            class="text-h6 font-weight-bold btn-responsive"
            rounded="xl"
            :class="{ active: $route.path === '/' }"
            @click="$router.push('/')"
          >
            상품
          </v-btn>
        </v-app-bar-title>
        <v-app-bar-title>
          <v-btn
            class="text-h6 font-weight-bold btn-responsive"
            rounded="xl"
            :class="{ active: $route.path === '/popular' }"
            @click="$router.push('/popular')"
          >
            인기상품
          </v-btn>
        </v-app-bar-title>
      </div>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "headerComponents",
  data() {
    return {
      logoClickCount: 0, 
      logoClickTimeout: null, 
    };
  },
  methods: {
    handleLogoClick() {
      this.logoClickCount++;
      
      
      if (this.logoClickTimeout) {
        clearTimeout(this.logoClickTimeout);
      }
      this.logoClickTimeout = setTimeout(() => {
        this.logoClickCount = 0;
      }, 1000);

      
      if (this.logoClickCount === 4) {
        this.$router.push("/create");
        this.logoClickCount = 0; 
      }
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: auto !important;
  height: 20% !important;
}
.v-toolbar__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.v-toolbar__title {
  width: 100px;
  height: 100%;
}
.v-app-bar-title__content {
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
}
.buttonBox {
  display: flex;
  gap: 50px;
  width: 30%;
  height: 100%;
  align-items: center;
}
#logo {
  color: var(--Primary2, #b7f1b3);
  display: flex;
  justify-content: center;
  font-family: "Cafe24 Decozoo";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
.v-app-bar-title__placeholder{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.v-btn {
  font-weight: bold;
  min-width: 90px; 
  height: 100%;
 
}
.v-btn__content{
   font-size: large; 
  }
.theme--light.v-btn.v-btn--has-bg.active {
  background-color: #b7f1b3;
  color: #fff;
  font-weight: bold;
}
.v-app-bar-title__content{
  height: 100%;
}

</style>
