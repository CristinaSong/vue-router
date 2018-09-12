import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = {
    template: `
        <div>
            <h2>Home</h2>
            <p>This is Home></p>
        </div>
    `
}
const Parent = {
    template: `
        <div>
            <h2>Parent</h2>
            <p>This is Parent></p>
        </div>
    `
}
const Page404 = {
    template: `
        <div>
            <h2>Page404</h2>
            <p>Error:404></p>
        </div>
    `
}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/Parent', component: Parent },
        {path:'*',component:Page404}//path *
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
            <li><router-link to='/Page404'>Page404</router-link></li>
        </ul>
        <transition :name="aaa" mode="out-in">
        <router-view></router-view>
        </transition>
    </div>
    `,
    watch: {
        '$route'(to, from) {
            console.log(to);
            console.log(from);
            if (from.path == '/Parent') {
                this.aaa = 'fade1';
            } else {
                this.aaa = 'fade2';
            }
        }
    }
}).$mount("#app")