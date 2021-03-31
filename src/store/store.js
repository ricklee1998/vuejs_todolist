import Vue from 'vue'
import Vuex from 'vuex'
import storage from "./modules/storage";
import * as getters from "./modules/getters";
import * as mutations from "./modules/mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
    userName: storage.fetchName(),
    todoOldestOrder: true
  },
  getters: getters,
  mutations: mutations
});