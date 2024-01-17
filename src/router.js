import { createRouter, createWebHistory } from 'vue-router';

import ProjectsIndex from './views/projects/ProjectsIndex.vue';
import Index from './views/Index.vue';
import ProjectShow from './views/projects/ProjectShow.vue';
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
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFound,
		},
    ]
});

export { router };