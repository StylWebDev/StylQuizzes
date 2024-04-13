<script setup>
import StracturesFlex from "./StracturesFlex.vue";
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

const {data} = defineProps({
  data: {
    type: Array,
    required: true
  },
  subject: {
    type: Number,
    required: true,
  }
})
const id = ref(0)
const router = useRouter();
const score = ref(0);
const subj = ref(["Math", "Biology", "Chemistry"])

const quest =  computed(()=> {return `${data[id.value].id}/3`})

const calculateResults = (answer) => {
  (answer) ? (score.value<3) ? score.value++ : score.value+=0 : null;
  (data[id.value].id===3) ? router.push({name: `Results` , query: {res: score.value}}) : null;
}


</script>

<template>
  <StracturesFlex class="text-white" :column="true" >
    <nav>
      <h2 class="text-center text-3xl font-extrabold"> {{subj[subject-1]}} Quiz</h2>
    </nav>
    <header class="text-2xl font-bold mt-4">
        <h3>Question No. {{quest}}</h3>
        <div class="h-[30px] w-72 border-2 border-white rounded-3xl">
          <div class="bg-violet-600 h-[100%] rounded-3xl transition-all duration-700 ease-in" :style="{width: `${Math.ceil(data[id].id*33.3)}%`}"></div>
        </div>
    </header>
    <main class="mt-5">
        <StracturesFlex justify="center" items="center">
          <img width="400px" :src="data[0].img" alt="subject" class="rounded-3xl">
        </StracturesFlex>
        <StracturesFlex class="mt-3 capitalize" :column="true">
          <p class="text-2xl text-center">{{data[id].text}}</p>
          <div v-for="(option) in data[id].options" :key="option.id" class="bg-violet-500 text-xl brightness-150 mt-2 hover:brightness-200">
            <StracturesFlex :row="true" @click="[calculateResults(option.isCorrect),(id===2) ? id=2 : id++]" class="cursor-pointer">
              <h4 class="w-[10%] text-center bg-violet-800">{{option.label}}</h4>
              <p class="pl-3 text-black">{{ option.text }}</p>
            </StracturesFlex>
          </div>
        </StracturesFlex>
    </main>
  </StracturesFlex>
</template>

<style scoped>

</style>