import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'Login',
  component: () =>
    import('../views/Login.vue')
},
{
  path: '/home',
  name: 'Home',
  component: () =>
    import('../views/Home.vue')
},
{
  path: '/shopping',
  name: 'Shopping',
  component: () =>
    import('../views/Shopping.vue')
},
{
  path: '/contact',
  name: 'Contact',
  component: () =>
    import('../views/Contact.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
