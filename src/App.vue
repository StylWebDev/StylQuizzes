<script setup>
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import {useThemeStore} from "./stores/theme.js";

const configureStore = useThemeStore()

</script>

<template>
    <Header  style="background: #21222C" class="max-md:sticky top-0 z-50"/>
    <SideBar style="background: #21222C"  class=" w-screen fixed h-screen md:invisible md:h-0 transition duration-500 ease-in" :class=" (configureStore.isOpen) ? `translate-x-0 z-50` : `translate-x-full z-10`" />
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0"
                enter-active-class="transition-all duration-700 ease-in"
                leave-active-class="transition-all duration-700 ease-in">
      <RouterView/>
    </Transition>
</template>

<style scoped>

</style>
