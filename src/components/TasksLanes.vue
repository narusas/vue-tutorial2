<template>

  <div class="rounded bg-blue-200 w-64 p-2 mx-2">
    <div class="flex justify-between py-1">
      <h3 class="text-sm">New landing page</h3>

    </div>
    <div class="text-sm mt-2">
      <draggable
          v-model="todos"


          item-key="id">
        <template #item="{element}">
          <task-item
              :task="element"
              @task-title-updated="taskTitleUpdated(element, $event)"
              @task-done="taskDone(element, $event)"
              @task-undone="taskUndone(element, $event)"
          />
        </template>


      </draggable>

      <p class="mt-3 text-grey-dark">Add a card...</p>
    </div>
  </div>

</template>
<script setup>
import draggable from '../../node_modules/vuedraggable/src/vuedraggable';
import TaskItem from "./TaskItem.vue";
import {ref} from "vue";

const todos = ref([
  {id: 1, title: "Do a mobile first layout", done: false, editing: false},
  {id: 2, title: "Check the meta tags", done: true, editing: false},
  {id: 3, title: "Check the responsive layout on all devices", done: false, editing: false},

])

function e(event, p1) {
  console.log(event, p1);
}

function taskDone(task) {
  task.done = true;
}

function taskUndone(task) {
  task.done = false;
}

function taskTitleUpdated(task, changedTitle) {
  console.log("taskTitleUpdated", task, changedTitle)
  task.title = changedTitle;
}

// @start="e('start')"
// @add="e('add')"
// @remove="e('remove')"
// @update="e('update')"
// @end="e('end')"
// @choose="e('choose')"
// @unchoose="e('unchoose')"
// @change="e('change')"


</script>
