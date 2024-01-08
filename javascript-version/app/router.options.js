

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default  {
  routes: scannedRoutes => [
    ...scannedRoutes,
    {
      path: '/',
      name: 'index',
      redirect: '/dashboard',
    },
  ],
}