import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = { template: '<div>Home内容</div>' }
const first = { template: '<div>first内容</div>' }
const second = { template: '<div>second内容</div>' }

const firstFirst = { template: '<div>firstFirst内容{{$route.params.id}}</div>' }//绑定id
const firstSecond = { template: '<div>firstSecond内容</div>' }

const asdf = {
    template: `
    <div class="asdf">
    <h2>组件</h2>
    <router-view class="sadfj"></router-view>
    </div>
    `
}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        {
            path: '/first', component: asdf,
            children: [
                { path: '/', component: first },//默认
                { path: 'first', component: firstFirst},
                { path: 'second', component: firstSecond },
                { path: 'third', redirect:'first'},
            ]
        },

        { path: '/second', component: second },
        { path: '/aaa/:id', component: firstFirst },
        { path: '/bbb/:id', redirect: '/aaa/:id' },//重定向绑定
        {
            path:'/ccc/:id',redirect:xxxx=>{
                const {hash,params,query}=xxxx;
                if(params.id=='001'){
                    return '/'
                }
            }
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
            <li><router-link to="/first/first">子first</router-link></li>
            <li><router-link to="/first/second">子second</router-link></li>
            <li><router-link to="/first/third">子333</router-link></li>
        </ol>
        <li><router-link to="/second">second</router-link></li>
        <li><router-link to="/aaa/123">aaa</router-link></li>
        <li><router-link to="/bbb/456">bbb</router-link></li>
        <li><router-link to="/ccc/001">ccc</router-link></li>
    </ol>
    <router-view class="ssdcw"></router-view>
    </div>
    `
}).$mount('#app')