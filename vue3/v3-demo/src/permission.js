import router from './router/index';
import store from './store/index';

router.beforeEach((to, from, next) => {
    const { userInfo } = store.getters;
    if (Object.keys(userInfo).length) {
        if (to.name === 'Login') {
            next({
                name: 'Home'
            });
        }
        next();
    } else {
        if (to.name === 'Login') next();
        next({
            name: 'Login'
        });
    }
});