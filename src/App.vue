<script setup>
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import {useThemeStore} from "./stores/theme.js";
import 'animate.css';
import StracturesFlex from "./components/StracturesFlex.vue";
import Footer from "./components/Footer.vue";

const configureStore = useThemeStore()

</script>

<template>
    <Header  style="background: #21222C" class="max-md:sticky top-0 z-50"/>
    <SideBar style="background: #21222C"  class=" w-screen fixed h-screen md:invisible md:h-0 transition duration-500 ease-in" :class=" (configureStore.isOpen) ? `translate-x-0 z-50` : `translate-x-full z-10`" />
    <RouterView/>
</template>

<style scoped>

</style>
