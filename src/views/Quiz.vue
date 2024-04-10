<script setup xmlns="http://www.w3.org/1999/html">
import {useRoute} from "vue-router";
import StracturesFlex from "../components/StracturesFlex.vue";
const route = useRoute();


</script>

<template>
  <StracturesFlex :column="true" class="mt-10 max-w-[500px] max-h-[400px] mr-auto ml-auto">
    <RouterView/>
  </StracturesFlex>
</template>

<style scoped>

</style>