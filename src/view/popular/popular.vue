<template>
    <v-main style="background-color: #F3F3F3;" >
        <Header></Header>
        <v-main  class="home-container">
    
        </v-main>
    </v-main>
</template>

<script>
import Header from '@/components/header/header.vue';
export default{
    name:"PopularPage",
    components:{
        Header,
    }
}
</script>


<style>
.home-container {
  min-width: 300px;
  height: 100vh; 
  margin-top: 10px; 
  padding: 2rem !important;

}
</style>
