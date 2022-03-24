import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   // component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home/index.vue'),
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Layout" */ '@/components/Layout/index.vue'),
    redirect: '/second/three/four',
    children: [
      {
        path: 'second',
        name: 'second',
        component: () => import(/* webpackChunkName: "SecondLevelRouter" */ '@views/Home/components/SecondLevelRouter.vue'),
        children: [
          {
            path: 'three',
            name: 'three',
            components: {
              default: () => import(/* webpackChunkName: "TertiaryRouter" */ '@components/Layout/components/TertiaryRouter.vue'),
              transmission: () => import(/* webpackChunkName: "About" */ '@views/About.vue'),
            },
            children: [
              {
                path: 'four',
                name: 'four',
                components: {
                  default: () => import(/* webpackChunkName: "HomeRight" */ '@views/Home/index.vue'),
                  transmission: () => import(/* webpackChunkName: "Home" */ '@views/Home.vue'),
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
