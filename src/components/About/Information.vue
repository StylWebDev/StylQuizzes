<script setup>

import StracturesFlex from "../StracturesFlex.vue";
import {Icon} from "@iconify/vue";
</script>

<template>
  <StracturesFlex :column="true" class="gap-y-6 md:w-[70%] xl:w-[50%] text-start max-md:text-center text-lg max-[300px]:text-base">
    <h2 class="text-violet-500 brightness-200 text-3xl max-[300px]:text-xl font-bold">Additional Info.</h2>
    <p >Welcome to StylQuizzes, the ultimate destination for quiz enthusiasts of all ages!
      My web app offers a diverse range of quizzes across various subjects including Math, biology, cyber Security, and more.
      Whether you're looking to test your knowledge, learn something new, or just have fun, you've come to the right place.</p>

    <h3 class="text-violet-500 brightness-200 text-3xl max-[300px]:text-xl font-bold">Why I created This Website</h3>
    <p>My primary goal for creating this website was to be a better developer and also to make learning fun and accessible for everyone.<br>
      Personally, i believe that quizzes are a powerful tool for education, enabling users to challenge themselves, discover their interests, and improve their knowledge in a playful way.</p>

    <h4 class="text-violet-500 brightness-200 text-3xl max-[300px]:text-xl font-bold">Join me & Help me on my coding journey</h4>
    <p><span class="underline decoration-2 underline-offset-4 text-yellow-500 "> For a business discussion or partnership, contact through my social accounts and github!</span>
      <br>Furthermore, if it is possible, you can donate me 1,20$ to help me continue my effort and become a better web developer and upgrade this website to the next level.
      <Icon icon="" class="inline size-10"/></p>

  </StracturesFlex>
</template>

<style scoped>

</style>