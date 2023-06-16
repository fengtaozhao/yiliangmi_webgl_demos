import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParentView from "@/components/ParentView/index.vue";

// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location){
    return originalPush.call(this , location).catch(err=>err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location){
    return originalReplace.call(this , location).catch(err=>err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: '首页',
    redirect:'/demoList',
    component: HomeView,
    children: [
        {
            path: '/demoList',
            name: '示例列表',
            component: () => import('@/views/demoList/index.vue')
        },
        {
            path: '/demo000',
            name: '000绘制简单的多边形',
            meta:{
              isDemo: true
            },
            component: () => import('@/views/demo000/index.vue')
        },
        {
            path: '/demo001',
            name: 'demo001利用裁剪坐标（坐标范围是 -1 到 +1）绘制简单的三角形',
            meta:{
                isDemo: true
            },
            component: () => import('@/views/demo001/index.vue')
        },
        {
            path: '/demo002',
            name: 'demo002利用屏幕像素坐标(左上角为坐标原点)绘制简单的三角形',
            meta:{
                isDemo: true
            },
            component: () => import('@/views/demo002/index.vue')
        },
        {
            path: '/demo003',
            name: 'demo003利用屏幕像素坐标(左上角为坐标原点)随机绘制30个三角形',
            meta:{
                isDemo: true
            },
            component: () => import('@/views/demo003/index.vue')
        },
        {
            path: '/demo004',
            name: 'demo004二维矩阵之绕原点旋转的F字母',
            meta:{
                isDemo: true
            },
            component: () => import('@/views/demo004/index.vue')
        },
        {
            path: '/demo005',
            name: 'demo005二维矩阵之绕自定义中心点旋转的F字母',
            meta:{
                isDemo: true
            },
            component: () => import('@/views/demo005/index.vue')
        },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
