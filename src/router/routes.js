
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'begin', component: () => import('pages/Index.vue') },
      { path: 'about', name: 'about', component: () => import('pages/About.vue') },
      { path: 'lenses', name: 'lenses', component: () => import('pages/Lenses.vue') },
      { path: 'glasses', name: 'glasses', component: () => import('pages/Glasses.vue') },
      { path: 'stores', name: 'stores', component: () => import('pages/Stores.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/auth/Login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/auth/Register.vue') },
      { path: 'email-confirmation', name: 'email-confirmation', component: () => import('pages/auth/EmailConfirmation.vue') },
      { path: 'forgot-password', name: 'forgot-password', component: () => import('pages/auth/ForgotPassword.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('pages/auth/ResetPassword.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/admin/Home.vue') }
    ],
    meta: {
      requireAuth: true
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
