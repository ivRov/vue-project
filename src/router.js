import { createRouter, createWebHashHistory} from 'vue-router'
import aboutUs from './components/aboutUs.vue'
import mainContents from './components/mainContents.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component:mainContents, alias:'/'},
        { path: '/about', component:aboutUs },
    ]
})