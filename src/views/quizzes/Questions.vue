<script setup>
import {useRoute} from "vue-router";
import Question from "../../components/Question.vue";
import data from "../../data/data.json"
const route = useRoute()


</script>

<template>
    <Question class="text-black" :data="data.find(val => val.id === parseInt(route.params.id)).questions" :subject="route.params.id" @getRes="bern"/>
</template>

<style scoped>

</style>