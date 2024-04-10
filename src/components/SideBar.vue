<script setup>
import {reactive} from "vue";
import StracturesFlex from "./StracturesFlex.vue";
import {useThemeStore} from "../stores/theme.js";
import Header from "./Header.vue";

const themeStore= useThemeStore()
const links = reactive([
  { link: "/", name: "Home" },
  { link: "/about", name: "About Us" },
])
</script>

<template>
  <StracturesFlex :column="true" justify="start" class="text-center pt-5">
      <h2 class="text-5xl font-extrabold text-violet-500 brightness-150 mt-10">Menu</h2>
      <StracturesFlex :column="true" justify="center" class="mt-3" >
        <RouterLink :class="themeStore.emerald.trans"
                    class="capitalize text-3xl font-bold py-2.5 hover:text-violet-500 hover:brightness-150"
                    active-class="text-violet-500 bg-white"
                    @click="themeStore.isOpen=!themeStore.isOpen"
                    v-for="(link,index) in links"
                    :key="index" :to="`${link.link}`"
        >{{link.name}}</RouterLink>
      </StracturesFlex>
  </StracturesFlex>
</template>

<style scoped>

</style>