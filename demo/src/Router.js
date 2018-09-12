import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from './transition.vue'//一定要加./
Vue.use(VueRouter)

const Home = {
    template: `
        <div>
            <h2>Home</h2>
            <p>This is Home></p>
        </div>
    `
}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/Parent', component: Parent },
    ]
})

//out-in:电梯来了，我先下去，你再进来
//in-out:电梯来了，你先进来我再下去

new Vue({
    router,
    data() {
        return {
            aaa: 'fade'
        }
    },
    template: `
    <div id="app">
        <h1>This is Transition</h1>
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/Parent'>Parent</router-link></li>
        </ul>
        <transition :name="aaa" mode="out-in">
        <router-view></router-view>
        </transition>
    </div>
    `
}).$mount("#app")