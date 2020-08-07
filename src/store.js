import Vue from "vue";
import staffData from "./data/staff";

/* 

Project is too small for vuex however I still wanted a way to share data between components

Also since I am not updating the JSON file I figured this would be a simple solution to set the intial amount here instead. 

*/

export const state = Vue.observable({
  staffCount: staffData.length
});

export const mutations = {
  setCount(count) {
    state.staffCount = count;
  }
};