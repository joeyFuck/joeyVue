import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./src/components/home.vue";
import about from "./src/components/about.vue";
import author from "./src/components/author.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
     {
        path: "/author",
        component: author
    }
]

var router =  new VueRouter({
    routes
})
export default router;