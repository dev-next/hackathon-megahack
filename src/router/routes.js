
const routes = [
  {
    path: '/Login',
    component: () => import('layouts/ExternalLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Login.vue'),
      },
      {
        path: '/Registrar',
        component: () => import('pages/Registration.vue'),
      },
      {
        path: '/Entrar',
        component: () => import('pages/LoginForm.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
      },
      {
        path: 'Clientes',
        component: () => import('pages/Customer.vue'),
      },
      {
        path: 'Vendedores',
        component: () => import('pages/Seller.vue'),
      },
      {
        path: 'Loja',
        component: () => import('pages/Store.vue'),
      },
    ]
  },
  {
    path: '/v',
    component: () => import('layouts/ShowroomLayout.vue'),
    children: [
      {
        path: ':id',
        component: () => import('pages/showroom/Index.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes;
