// <!--
//  * 严肃声明：
//  * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
//  * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
//  * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
//  * Copyright (c) 2020 陈尼克 all rights reserved.
//  * 版权所有，侵权必究！
//  *
// -->
import { createApp } from 'vue'
import App from './App2.vue'
import router from './router'
import './assets/main.css'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'

import {
    Icon,
    Swipe,
    SwipeItem,
    Skeleton
} from 'vant'

const app = createApp(App)
app
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(Skeleton)
    .use(router)

app.config.globalProperties.$filters = {
    prefix(url) {
        if (url && url.startsWith('http')) {
            return url
        } else {
        url = `http://backend-api-01.newbee.ltd${url}`
            return url
        }
    }
}

app.mount('#app')
