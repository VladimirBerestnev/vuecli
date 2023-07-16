import Vue from 'vue'
import Router from 'vue-router'
import BlogPage from '@/pages/BlogPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import MainPage from '@/pages/MainPage.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/blog',
            name: 'Blog',
            component: BlogPage
        },
        {
            path: '/project',
            name: 'Project',
            component: ProjectPage
        },
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404',
        },


    ]

})