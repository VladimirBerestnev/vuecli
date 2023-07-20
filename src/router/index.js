import Vue from 'vue'
import Router from 'vue-router'
import BlogPage from '@/pages/BlogPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import MainPage from '@/pages/MainPage.vue'
import NotFound from '@/pages/NotFound.vue'
import ProjectDetails from '@/pages/ProjectDetails.vue'


Vue.use(Router)




export default new Router({

    scrollBehavior() {
        // always scroll to top
        return {
            x: 0, y: 0,
            behavior: 'smooth'
        }
    },

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
            path: '/projectdetails',
            name: 'ProjectDetails',
            component: ProjectDetails
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