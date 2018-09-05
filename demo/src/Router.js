import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = { template: '<div>Home内容</div>' }
const first = { template: '<div>first内容</div>' }
const second = { template: '<div>second内容</div>' }
const hehe={ template: '<div>hehe内容</div>'}


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/',components: {
            default:Home,
            left:first,
            right:second
        }},
        { path: '/first', components: {
            default:hehe,
            left:first,
            right:second
        } },
    ]
})

new Vue({
    router,
    template: `
    <div id='r'>
    <h1>导航</h1>
    <ol>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/first">first</router-link></li>
    </ol>
    <router-view class="ssdcw"></router-view>
    <router-view class="ssdcw" name="left" style="float:left;width:50%;background-color:red;height:300px"></router-view>
    <router-view class="ssdcw" name="right" style="float:left;width:50%;background-color:blue;height:300px"></router-view>
    </div>
    `
}).$mount('#app')
