import { createRouter, createWebHistory } from 'vue-router'

import Result from './components/Result.vue'
import LandingPage from './components/LandingPage.vue'

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'Result',
            path:'/result',
            component:Result
        },
        {
            name:'Home',
            path:'/',
            component:LandingPage
        }
       
    ]
})