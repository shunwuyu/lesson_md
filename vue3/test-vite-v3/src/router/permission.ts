import { router } from './index';
import { getToken } from '../utils/auth';
const whiteList = ['/login'];

router.beforeEach(async (to: any, _, next) => {
    const hasToken = getToken();
    if (hasToken) {
    } else {
        // 未登录
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login');
        }
    }
})