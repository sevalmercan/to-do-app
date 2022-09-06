import Vue from "vue";
export const state = Vue.observable({
  toDoArray: [
    { checked: false, name: "seval", id: 1 },
    { checked: true, name: "emre", id: 2 },
  ],
});
