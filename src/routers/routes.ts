import * as VueRouter from 'vue-router';
import NotFound  from '../components/NotFound.vue';
import VueUse from '../components/vueUse/index.vue'
import Exposure from '../components/exposure.vue';
import TestNextTick from '../components/TestNextTick.vue';

// 1. 定义路由组件.
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

// 2. 定义一些路由
const routes = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  // 最后的*表示匹配多次，所以pathMatch保存为数组，不保留/; 如果不写的话值匹配一次，后面的/保留
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound },
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  { path: '/user-:afterUser(.*)', component: NotFound },
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/vue-use', component: VueUse },
  { path: '/exposure', component: Exposure },
  { path: '/test-next-tick', component: TestNextTick },
];


// 3. 创建路由实例
export const router = VueRouter.createRouter({
  // 使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router;
