import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from './transition.vue'//一定要加./
Vue.use(VueRouter)

const Home = {
    template: `
        <div>
            <h2>Home</h2>
            <p>This is Home-{{$route.query.a}}</p>
        </div>
    `
}
const Page404 = {
    template: `
        <div>
            <h2>Page404</h2>
            <p>Error:404</p>
        </div>
    `,
    //路由里的钩子
    beforeRouteEnter:(to,from,next)=>{
        console.log("beforeRouteEnter_to:",to);
        console.log("beforeRouteEnter_from:",from);
        next();
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log("beforeRouteLeave_to",to);
        console.log("beforeRouteLeave_from",from);
        next();
    }
}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/Parent', component: Parent,
            beforeEnter:(to,from,next)=>{
                console.log(to);
                console.log(from);
                //next（）//可以，next(false);不可以执行下一步
                next({path:'/qqwfwf'});//改变路由路径
            }
        },
        {path:'*',component:Page404}//path *,一定要放在路由的最后面
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
        <button v-on:click="houtui">后退</button>
        <button v-on:click="qianjin">前进</button>
        <button v-on:click="home">返回首页</button>
        <button v-on:click="query">query</button>
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
    methods:{
        houtui:function(){
            router.go(-1);
        },
            qianjin:function(){
            router.go(1);
        },
        home:function(){
            router.push("/");
        },
        query:function(){
            router.push({path:"/",query:{a:1,b:2}});
        }
    }
}).$mount("#app")