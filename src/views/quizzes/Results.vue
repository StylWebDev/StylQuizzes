<script setup>
import {useRoute,useRouter} from "vue-router";
import StracturesFlex from "../../components/StracturesFlex.vue";
import {Icon} from "@iconify/vue";
import {onMounted, reactive} from 'vue'

const router = useRouter();
const route = useRoute();
const query = route.query;
const result = reactive([`line-md:emoji-frown-twotone`,`line-md:emoji-frown-open-twotone`,`line-md:emoji-neutral-twotone`,`line-md:emoji-smile-wink-twotone`])
onMounted(()=> {
  (parseInt(query.res)<0 || parseInt(query.res)>3) ? router.push(`/404`) : null
})
</script>

<template>
<StracturesFlex :column="true" class="gap-4" items="center">
  <hgroup class="text-center ">
    <h1 class="capitalize text-4xl font-extrabold text-violet-500 brightness-150">your results are</h1>
    <p class="text-white text-3xl font-bold">{{query.res}}/3</p>
  </hgroup>
  <Icon :icon="result[query.res]" class="size-60" :class="(parseInt(query.res)===0) ? `text-red-700`  : (parseInt(query.res)===1) ? `text-white` : (parseInt(query.res)===2) ? `text-yellow-500` : `text-emerald-500`" />
  <RouterLink class=" py-0.5 px-3 bg-violet-600 rounded-2xl hover:brightness-125 border-2 border-white font-bold text-xl transition ease duration-150 delay-100 cursor-pointer" to="/">Back to Home</RouterLink>
</StracturesFlex>
</template>

<style scoped>

</style>