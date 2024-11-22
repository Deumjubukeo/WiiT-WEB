<template>
  <v-app>
    <v-app-bar
      :elevation="0"
      style="display: flex; justify-content: space-between; background-color: #fff; width: 100%;"
    >
      <template>
        <h4 id="logo">WiiT</h4>
      </template>
      <div class="buttonBox">
        <v-app-bar-title>
          <v-btn
            rounded="xl"
            :class="{ active: $route.path === '/' }"
            @click="$router.push('/')"
          >
            상품
          </v-btn>
        </v-app-bar-title>
        <v-app-bar-title>
          <v-btn
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
  width: 25%;
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
}
.v-btn{
  font-weight: bold;
}
.theme--light.v-btn.v-btn--has-bg.active{
  background-color:  #b7f1b3;
  color: #fff;
  font-weight: bold;
}
</style>
