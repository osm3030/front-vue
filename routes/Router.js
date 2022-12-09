import { createRouter, createWebHashHistory } from 'vue-router';
import CategoryIndex from '../src/components/Categories/CategoryIndex.vue';
import CategoryView from '../src/components/Categories/CategoryView.vue';
import CategoryEdit from '../src/components/Categories/CategoryEdit.vue';
import CategoryCreate from '../src/components/Categories/CategoryCreate.vue';
import PostIndex from '../src/components/Posts/PostIndex.vue';
import PostView from '../src/components/Posts/PostView.vue';
import PostCreate from '../src/components/Posts/PostCreate.vue';
import PostEdit from '../src/components/Posts/PostEdit.vue';

const routes = [
    { 
        path: '/categories', 
        component: CategoryIndex,
        redirect: '/categories/list',
        children:[
            {
                path: 'list',
                component: CategoryView
            },
           {
                path: 'create',
                component: CategoryCreate
            },
            {
                path:':id/edit',
                component: CategoryEdit,
                props: true
            }
        ] 
    },
    { 
        path: '/posts', 
        component: PostIndex,
        redirect: '/posts/list',
        children:[
            {
                path: 'list',
                component: PostView
            },
           {
                path: 'create',
                component: PostCreate
            },
            {
                path:':id/edit',
                component: PostEdit,
                props: true
            }
        ] 
    },

  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes

});

export default router;