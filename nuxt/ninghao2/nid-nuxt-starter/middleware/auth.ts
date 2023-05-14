export default defineNuxtRouteMiddleware(() => {
    console.log('👮 auth 中间件');
  
    const isLoggedIn = true;
  
    if (!isLoggedIn) {
      return navigateTo('/login');
    }
});