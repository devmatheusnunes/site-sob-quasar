
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'lenses', component: () => import('pages/Lenses.vue') },
      { path: 'glasses', component: () => import('pages/Glasses.vue') },
      { path: 'stores', component: () => import('pages/Stores.vue') },
      { path: 'network', component: () => import('pages/Network.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
