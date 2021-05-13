<template>
  <div class="bg-blue-400 w-full h-auto p-8 flex justify-center font-sans">
    <tasks-panel></tasks-panel>
  </div>
</template>

<script setup>
import {Home, More} from '@icon-park/vue-next';

import {ref} from "vue";
import TasksPanel from "./components/TasksPanel.vue";

const tasks  = ref({})

</script>

