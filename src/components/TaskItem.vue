<template>
  <div
      class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter"
  >
    <div v-if="!isEditing"
         @dblclick="dblclick(task)"
    >
      <input type="checkbox" class="rounded"
             :checked="task.done"
             @click="changeDone"
      /> {{ task.title }}
    </div>
    <div v-if="isEditing">
    <textarea
        type="text"
        class="w-full h-full m-0 text-xs"
        v-model="editing"
        @input="userTyping"
        @keyup.esc="cancel"
        ref="input"
    ></textarea>
    </div>
  </div>

</template>
<script setup>
import {defineProps, ref, toRefs, nextTick, defineEmit} from "vue";
import {onClickOutside} from '@vueuse/core';

const props = defineProps({
  task: {
    type: Object
  }
});

const emit = defineEmit([
  "task-title-updated",
  "task-done",
  "task-undone"
])


const isEditing = ref(false);
const editing = ref(null);


const input = ref(null);

function changeDone() {
  console.log("Change Done", props.task.done);
  props.task.done ? emit("task-undone") : emit("task-done");
}

function completeEditing() {
  isEditing.value = false;
  emit("task-title-updated", editing.value);
}

onClickOutside(input, (event) => {
  completeEditing();
});

function dblclick(todo) {
  isEditing.value = true;
  editing.value = props.task.title;
  nextTick(() => {
    input.value.focus();
  })
}

function cancel() {
  isEditing.value = false;
  editing.value = null;
}

function userTyping(event) {
  console.log(event);
}

</script>
