<script setup>
import Card from "../components/Card.vue";
import StracturesFlex from "../components/StracturesFlex.vue";
import data from "../data/data.json";
import {ref, watch} from "vue";
import Footer from "../components/Footer.vue";

const quizzes = ref(data);
const search = ref("")

watch(search, (newVal) => {
  quizzes.value = data.filter((item) => item.name.toLowerCase().includes(newVal.toLowerCase()));
})

</script>

<template>
 <StracturesFlex :column="true" justify="around" items="center" class="gap-y-5">

   <hgroup class="text-center">
     <h1 class="text-4xl font-extrabold text-violet-500 brightness-150">Welcome to StylQuizzes</h1>
     <p class="text-2xl font-bold text-white">A web platform where you can test your knowledge!</p>
   </hgroup>

    <StracturesFlex :row="true" justify="around">
      <StracturesFlex :row="true" justify="center" items="center" class="gap-4">
          <h2 class="text-3xl font-extrabold text-violet-500 brightness-150">Quizzes</h2>
          <input class="block text-violet-200 font-light rounded-lg w-1/2 p-1 px-2 outline-0 bg-eggplant-500 shadow shadow-full shadow-eggplant-500 focus:shadow-white transition-all ease-in duration-500"  type="text" v-model.trim="search" placeholder="Search..." />
      </StracturesFlex>
    </StracturesFlex>

    <StracturesFlex :row="true" justify="center" items="center" :wrap="true" class="mt-10 gap-10">
      <TransitionGroup
                       enter-from-class="opacity-0 scale-0"
                       enter-active-class="transition-all duration-500 ease-in"
                       leave-to-class="opacity-0 scale-0"
                       leave-active-class="transition-all duration-500 ease-out"
                       move-class="transition duration-500 ease-in-out"
                       appear
                       appear-active-class="transition-all duration-700 ease-in">
        <Card v-for="val in quizzes" :key="val.id" :src="val.img.toString()" :questions="val.questions.length" :bgColor="`bg-eggplant-600`" text-color="text-white" :link="val.id" class="tilt">
          <template #card-header>{{ val.name }}</template>
          <template #card-title>{{ val.name }} Quiz</template>
          <template #card-descrption>{{val.description}}</template>
        </Card>
      </TransitionGroup>
    </StracturesFlex>

   <Footer class="w-screen mt-5"/>
 </StracturesFlex>
</template>

<style scoped>
</style>