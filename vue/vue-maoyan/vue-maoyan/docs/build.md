## 优化上线

时间有限，暂时就做这这么多功能，包含了大部分功能和vue知识。如果有疑问，请到github提issue

## 懒加载的应用
最开始我们在mian.js已经引用了懒加载如:

```js
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: 'assets/images/loading.gif'
})

```

我们在Home的Content子组件应用

```html
<img v-lazy="movie.img" />
```

## 将所有组件拆分成异步组件

修改router\index.js

```
import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => {
  import('@/pages/home/Home').then((module) => {
    resolve(module)
  })
}

const Start = (resolve) => {
  import('@/pages/start/Start').then((module) => {
    resolve(module)
  })
}

const Cinema = (resolve) => {
  import('@/pages/cinema/Cinema').then((module) => {
    resolve(module)
  })
}

const My = (resolve) => {
  import('@/pages/my/My').then((module) => {
    resolve(module)
  })
}

const City = (resolve) => {
  import('@/pages/city/City').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
```

```bash
npm run build
```

打包上线。







