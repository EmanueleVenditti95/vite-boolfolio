import { createRouter, createWebHistory } from 'vue-router';

import ProjectsIndex from './views/projects/ProjectsIndex.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsIndex
        }
    ]
});

export { router };