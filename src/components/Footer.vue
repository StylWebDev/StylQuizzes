<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../components/StracturesFlex.vue";
import Grid from "../components/Grid.vue";
</script>

<template>
  <Grid columns="2">
    <StracturesFlex :row="true" items="center" justify="center" class="text-lg max-sm:text-sm" >
    <img src="../assets/logo.svg" alt="Logo" width="50" class="inline brightness-150">
    <StracturesFlex :column="true" justify="center"  class="align-middle text-sm text-center text-violet-500 brightness-150"><div>© 2024</div><div>All Rights Reserved</div></StracturesFlex>
  </StracturesFlex>
    <StracturesFlex  class=" max-sm:text-sm  rainbow" :column="true">
    <p class="text-center inline align-center font-bold ">Find Me on</p>
    <slot/>
    <StracturesFlex :row="true" justify="center" class="space-x-10 max-md:space-x-5 max-[300px]:space-x-2">
      <a href="https://www.linkedin.com/in/konstantinos-stylianou-a4a95625b/" target="_blank">
        <Icon width="35" icon="line-md:linkedin"/>
      </a>
      <a href="https://github.com/AliBaBas02" target="_blank">
        <Icon width="35" icon="line-md:github-loop"/>
      </a>
      <a href="#">
        <Icon width="35" icon="material-symbols:globe"/>
      </a>
    </StracturesFlex>
  </StracturesFlex>

  </Grid>
</template>

<style scoped>

</style>