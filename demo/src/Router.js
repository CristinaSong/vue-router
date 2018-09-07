import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const users={
    template:`
    <div>
        <h2>Users</h2>
        <router-view></router-view>
    </div>
    `
}
const user={
    template:`
    <div>
        {{$route.params.username}}-{{$route.query.aaa}}
    </div>
    `
}
const Home={template:'<div><h2>HOME</h2></div>'}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/',name:'Home',component:Home},
        {path:'/users',component:users,
            children:[
                {path:':username',name:'user',component:user}
            ]//数组
        }
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
            <ol>
                <li><router-link :to="{path:'/users/wossss',query:{aaa:'bbb'}}">wos</router-link></li>
            </ol>
        </ol>
        <router-view></router-view>
    </div>
    `
}).$mount('#app')
