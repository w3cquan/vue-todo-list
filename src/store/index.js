import Vuex from 'vuex'

import Vue from 'vue'

Vue.use(Vuex)

const actions = {
  jia(context, value){
    context.commit('JIA', value)
  }
}

const mutations = {
  JIA(state,){
    console.log(state.list);
  } 
}

const state = {
  list: [
    {id: 1, content: 'eating', states: true},
    {id: 2, content: 'coding', states: false},
    {id: 3, content: 'seeping', states: true}
  ],

  collectList: [
    {id: 1, content: 'shouc', states: true},
    {id: 2, content: 'shouc', states: false},
    {id: 3, content: 'shouc', states: true}
  ],

  ashbin: [
    {id: 1, content: 'test', states: true},
    {id: 2, content: 'test', states: false},
    {id: 3, content: 'test', states: true}
  ],
}

export default new Vuex.Store({
   actions,
   mutations,
   state 
})

