<script setup>
import StracturesFlex from "./StracturesFlex.vue";
import Grid from "./Grid.vue";
import {reactive} from "vue";
import {Icon} from "@iconify/vue";
import {useThemeStore} from "../stores/theme.js";

const links = reactive([
  { link: "/", name: "Home" },
  { link: "/about", name: "About Us" },
])
const themeStore = useThemeStore();
</script>

<template>
  <Grid columns="2" justify="center" items="center" class="py-2">
    <RouterLink to="/" :class="themeStore.emerald.trans" class="text-center text-2xl font-extrabold text-violet-500 brightness-150 ">
      <img src="../assets/logo.svg" alt="logo" width="50px" class="inline"> StylQuizzes</RouterLink>
    <StracturesFlex :row="true" justify="center" class="gap-4 pt-2 max-sm:hidden">
      <RouterLink :class="themeStore.emerald.trans"
                  class="capitalize text-xl font-bold  hover:text-violet-500 hover:brightness-150
                  after:hover:bg-violet-500 after:bg-white after:relative after:left-0 after:w-0 after:block after:h-0.5 hover:after:w-[100%] after:duration-500 after:ease-out"
                  active-class="text-violet-500 brightness-150 underline decoration-2 underline-offset-4 decoration-violet-500 after:hidden"
                  v-for="(link,index) in links" :key="index" :to="`${link.link}`">{{link.name}}</RouterLink>
    </StracturesFlex>
    <button type="button" class="w-[50%] mx-[50%] sm:hidden hover:hover:text-emerald-500"><Icon icon="ph:list-magnifying-glass" width="40px" @click="themeStore.isOpen=!themeStore.isOpen"/></button>
  </Grid>
</template>

<style scoped>

</style>