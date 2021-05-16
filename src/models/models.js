import {ref, computed} from "vue";

const data = ref({
  laneList: ["1", "2", "3"],
  lanes: {
    "1": {
      id: "1",
      title: "Backlogs",
      taskList: ["task1", "task2"]

    },
    "2": {
      id: "2",
      title: "WIP",
      taskList: ["task3"]
    },
    "3": {
      id: "3",
      title: "Done",
      taskList: ["task4", "task5"]
    }
  },
  tasks: {
    "task1": {
      "title": "Do a mobile first layout",
      "done": false
    },
    "task2": {
      "title": "Do a mobile first layout",
      "done": false
    },
    "task3": {
      "title": "Do a mobile first layout",
      "done": false
    }, "task4": {
      "title": "Do a mobile first layout",
      "done": false
    },
    "task5": {
      "title": "Do a mobile first layout",
      "done": false
    },
  }
});

export function useModel() {
  const models = ref({});


  const lanes = computed(()=>{
    return data.value.laneList.map(laneId => data.value.lanes[laneId]);
  });



  const useTasks = laneId => {
    return computed(() => {

    });
  }

  return {
    lanes,
    useTasks
  }
}
