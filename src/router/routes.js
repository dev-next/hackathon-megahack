
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
        component: () => import('pages/sellers/Index.vue'),
      },
      {
        path: 'Produtos',
        component: () => import('pages/products/Index.vue'),
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
      {
        path: ':id/Entrega',
        component: () => import('pages/showroom/Delivery.vue'),
      },
      {
        path: ':id/Pagamento',
        component: () => import('pages/showroom/Payment.vue'),
      },
      {
        path: ':id/Checkout',
        component: () => import('pages/showroom/Checkout.vue'),
      },
      {
        path: ':id/item/:item',
        component: () => import('pages/showroom/Item.vue'),
      }
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
