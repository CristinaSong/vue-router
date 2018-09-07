import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/' },
        { path: '/params/:aaa/:bbb' },
        { path: '/parame-regex/:id(\\d+)' },//正则表达式:包含至少一个数字
    ]
})

new Vue({
    router,
    template: `
    <div>
        <h1>Good Morning</h1>
        <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/params/111/222">/params/111/222</router-link></li>
            <li><router-link to="/parame-regex/222">/parame-regex/222</router-link></li>
        </ul>
        <p>Show</p>
        <pre>
            <code>
                {{JSON.stringify($route,null,2)}}
            </code>
         </pre>
    </div>
    `
}).$mount('#app')
