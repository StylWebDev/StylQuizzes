<script setup>

import {Icon} from "@iconify/vue";
import {ref} from "vue";
const id = ref(import.meta.env.VITE_PAYPAL_ID)
</script>

<template>
  <form action="https://www.paypal.com/donate" method="post" target="_top" class="justify-self-end">
    <input type="hidden" name="hosted_button_id" :value="id" />
    <button class="border-2 border-yellow-500 px-2 rounded-2xl text-lg font-bold text-yellow-500 transition duration-500 ease-in hover:brightness-125"
            title="PayPal - The safer, easier way to pay online!" type="submit">
      <Icon icon="ci:paypal"  class="inline size-8" /> Donate</button>
    <img alt="" border="0" src="https://www.paypal.com/en_GR/i/scr/pixel.gif" width="1" height="1" />
  </form>
</template>

<style scoped>

</style>