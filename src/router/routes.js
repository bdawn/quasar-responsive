const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'stepper', component: () => import('pages/Stepper.vue') },
      { path: 'tab-panel', component: () => import('pages/TabPanel.vue') },
      { path: 'my-form', component: () => import('pages/MyForm.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
