<template>
  <div class="bg-blue-400 w-full h-full p-8 flex justify-center font-sans">
    <tasks-lane v-for="lane in lanes" :key="lane.id"></tasks-lane>
  </div>
</template>

<script setup>
import {Home, More} from '@icon-park/vue-next';
import {ref} from "vue";
import TasksLane from "./components/TasksLanes.vue";

import {useModel} from "./models/models.js";

const {lanes} = useModel();
console.log(lanes);
</script>

