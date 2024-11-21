<template>
    <v-app>
      <v-app-bar :elevation="0" style="display: flex; flex-direction: row-reverse; background-color:#fff">
        <v-app-bar-title>상품</v-app-bar-title>
        <v-app-bar-title>인기상품</v-app-bar-title>
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
 
  </style>
  