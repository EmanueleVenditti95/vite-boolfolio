import { createRouter, createWebHistory } from 'vue-router';

import ProjectsIndex from './views/projects/ProjectsIndex.vue';
import Index from './views/Index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsIndex
        }
    ]
});

export { router };