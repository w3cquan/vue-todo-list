import VueRouter from 'vue-router'

import MyDay from '../components/MyDay'
import MyCollect from '../components/MyCollect'
import MyAshbin from '../components/MyAshbin'
 

const routes = [
  {path: '/MyDay', component: MyDay},
  {path: '/MyCollect', component: MyCollect},
  {path: '/MyAshbin', component: MyAshbin}
]

export default new VueRouter({
  routes
})
