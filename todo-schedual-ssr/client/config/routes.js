// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    // path: '/app/:id',
    path: '/app',
    component: () => import('../views/todo/todo.vue')
    // props: true
    /* props: {
      id: 111
    }, */
    // props: (route) => ({ id: route.query.id})
    /* beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    } */
    /* children: [
      {
        path: 'test',
        component: Login
      }
    ] */
    /* meta: {
      title: 'this is app',
      description: 'description'
    } */
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
