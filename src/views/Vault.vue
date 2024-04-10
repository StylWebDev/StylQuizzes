<script setup>
import Card from "../components/Card.vue";
import StracturesFlex from "../components/StracturesFlex.vue";
import data from "../data/data.json";
import {onMounted, onUpdated, ref, watch} from "vue";
import Footer from "../components/Footer.vue";
import VanillaTilt from "vanilla-tilt";

const quizzes = ref(data);
const search = ref("")

watch(search, (newVal) => {
  quizzes.value = data.filter((item) => item.name.toLowerCase().includes(newVal.toLowerCase()));
})

onMounted(()=>{
  VanillaTilt.init(document.querySelectorAll(".tilt"),{max:5, glare:true, "max-glare":0.1 , speed:300});
})

</script>

<template>
 <StracturesFlex :column="true" justify="around" items="center" class="gap-y-5">

   <hgroup class="text-center">
     <h1 class="text-4xl font-extrabold text-violet-500 brightness-150">Welcome to StylQuizzes</h1>
     <p class="text-2xl font-bold rainbow">A web platform where you can test your knowledge</p>
   </hgroup>

    <StracturesFlex :row="true" justify="around">
      <StracturesFlex :row="true" justify="center" items="center" class="gap-4">
          <h2 class="text-3xl font-extrabold text-violet-500 brightness-150">Quizzes</h2>
          <input class="block text-black rounded-lg w-1/2 px-1.5 bg-violet-100 outline-violet-400" type="text" v-model.trim="search" placeholder="Search..." />
      </StracturesFlex>
    </StracturesFlex>

    <StracturesFlex :row="true" justify="center" items="center" :wrap="true" class="mt-10 gap-10">
      <Card v-for="val in quizzes" :key="val.id" :src="val.img.toString()" :questions="val.questions.length" :bgColor="`bg-purple-900`" text-color="text-white" :link="val.id" class="tilt">
        <template #card-header>{{ val.name }}</template>
        <template #card-title>{{ val.name }} Quiz</template>
        <template #card-descrption>{{val.description}}</template>
      </Card>
    </StracturesFlex>

   <Footer class="w-screen mt-5"/>
 </StracturesFlex>
</template>

<style scoped>

</style>