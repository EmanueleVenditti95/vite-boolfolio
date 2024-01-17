import { createRouter, createWebHistory } from 'vue-router';

import ProjectsIndex from './views/projects/ProjectsIndex.vue';
import Index from './views/Index.vue';
import ProjectShow from './views/projects/ProjectShow.vue';
import TypeIndex from './views/projects/types/TypeIndex.vue';
import NotFound from './views/NotFound.vue';

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
        },
        {
            path: '/projects/:slug',
            name: 'show.project',
            component: ProjectShow
        },
        {
            path: '/types',
            name: 'types',
            component: TypeIndex
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ]
});

export { router };