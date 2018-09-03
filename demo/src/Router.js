import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = { template: '<div>Home内容</div>' }
const first = { template: '<div>first内容</div>' }
const second = { template: '<div>second内容</div>' }

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/first', component: first },
        { path: '/second', component: second },
    ]
})

new Vue({
    router,
    template: `
    <div id='r'>
    <h1>导航</h1>
    <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/first">first</router-link></li>
        <li><router-link to="/second">second</router-link></li>
    </ul>
    <router-view class="ssdcw"></router-view>
</div>
`
}).$mount('#app')
