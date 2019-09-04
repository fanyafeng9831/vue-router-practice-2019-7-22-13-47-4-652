import Vue from 'vue'
import Router from 'vue-router'

import selfIntroduce from '../components/selfIntroduce.vue'
import login from '../components/login.vue'



Vue.use(Router)
//
const router = new Router({
    routes: [
     { path: '/study', component: study },
    ]
  })

//导出store
export default router;