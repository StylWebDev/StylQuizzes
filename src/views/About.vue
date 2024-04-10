<script setup>
import StracturesFlex from "../components/StracturesFlex.vue";
import Information from "../components/About/Information.vue";
import Donate from "../components/About/Donate.vue";
import Links from "../components/About/Links.vue";
</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center" class="mx-3 text-center gap-y-6">
    <h1 class="text-5xl max-[300px]:text-3xl font-bold text-violet-500 brightness-150">About StylQuizzes</h1>
    <Information/>
    <StracturesFlex :row="true" :wrap="true" justify="evenly"  items="center" class="min-[430px]:gap-x-5 max-sm:gap-y-5 md:w-[70%] xl:w-[50%]">
      <Donate/>
      <StracturesFlex :row="true"  justify="center" items="center" class="gap-x-3 rainbow mb-2">
        <h5 class="text-lg font-bold text-yellow-500">Find me on:</h5>
        <Links/>
      </StracturesFlex>
    </StracturesFlex>
  </StracturesFlex>

</template>
