<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../components/StracturesFlex.vue";
import {useThemeStore} from "../stores/theme.js";
const configureStore = useThemeStore()
</script>

<template>
  <StracturesFlex :column="true" items="center" justify="center" class=" text-center cursor-default mx-4 mt-8 space-y-3 fadeIn">
    <h1 :class="configureStore.emerald.trans" class="md:text-5xl max-md:text-3xl font-bold justify-self-start text-violet-500 brightness-150">404 Page Not Found!</h1>
    <Icon class="size-72 text-violet-500 brightness-150" :class="configureStore.emerald.trans" icon="line-md:coffee-twotone-loop"/>
    <p class="lg:text-3xl md:text-2xl max-2xl:text-lg font-semibold capitalize text-violet-500 brightness-150" >Sorry But we couldn't find the page you were looking for</p>
    <RouterLink to="/" :class="configureStore.emerald.trans" class="capitalize rounded-full border-2 px-3 text-xl bg-neutral-900 bg-opacity-30 hover:text-violet-500 hover:border-violet-700 hover:brightness-200">Back to home</RouterLink>
  </StracturesFlex>
</template>

<style scoped>

</style>