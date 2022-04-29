<template>
  <div id="app">
    <LeftBar />
    <CenterTodo />
    <RightList/>
  </div>
</template>

<script>

import LeftBar from './components/LeftBar'
import RightList from './components/RightList'
import CenterTodo from './components/CenterTodo'

export default {
  name: 'App',
  components: {
    LeftBar,
    RightList,
    CenterTodo
  },

  mounted() {
    console.log('App', this);
  }
}
</script>

<style scoped>
 #app{
   width: 100%;
   height: 100%;
   position: absolute;
   display: flex;
   justify-content: space-between;
   background-color: rgb(93, 109, 125);
 }
</style>
