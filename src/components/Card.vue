<script setup>
import StracturesFlex from "./StracturesFlex.vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  questions: {
    type: Number,
    default: 0,
  },
  bgColor: {
    type: String,
    default: "bg-neutral-900",
  },
  text: {
    type: String,
    default: "text-neutral-50",
  },
  link: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div>
    <StracturesFlex :column="true" justify="center" items="center" class="rounded-lg w-[280px] space-y-1 pb-2 cursor-default overflow-hidden bg-opacity-50" :class="[props.bgColor,props.text]">
      <StracturesFlex :row="true" justify="center" items="center">
        <h1 class="text-xl font-extrabold capitalize"><slot name="card-header"></slot></h1>
      </StracturesFlex>
      <hr class="text-white rounded-full opacity-50" width="98%"/>
      <StracturesFlex :column="true" justify="center" items="start">
        <img :src="props.src" alt="card-image" class="self-center w-[100%] h-[240px]">
        <h2 class="text-lg font-bold px-1"><slot name="card-title"></slot></h2>
        <p class="px-1"><slot name="card-descrption"></slot></p>
        <p class="text-xs text-neutral-200 mt-3 opacity-75 px-1">{{props.questions}} Questions</p>
      </StracturesFlex>
      <hr class="text-white rounded-full opacity-50" width="98%"/>
      <StracturesFlex :row="true" justify="center" items="center">
        <RouterLink :to="`/quiz/${props.link}`" class="py-0.5 px-2 bg-violet-500 rounded-xl brightness-150 hover:brightness-200 border border-white transition ease duration-150 delay-100 cursor-pointer">Take Quiz</RouterLink>
      </StracturesFlex>
    </StracturesFlex>
  </div>
</template>

<style scoped>

</style>