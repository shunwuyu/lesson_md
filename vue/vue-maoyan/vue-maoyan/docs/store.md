## 引入store

- 按照vuex
```bash
npm install -D vuex
```

- 在src目录下创建store文件夹

store文件夹住要存放以下几个文件

states.js
```js
export default {
  city: '北京'
}
```

mutations.js
```js
export default {
	setCity(state, city) {
		state.city = city;
	}
}
```

getters.js
```js
export default {
	city: state => state.city
}
```

actions.js
```js
export default {
}
```

index.js
```js
import Vue from 'vue';
import Vuex from 'vuex';
import state from './states';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store;
```

下面分别讲下对应文件的作用

- states.js 主要存放state的数据
- mutations.js 主要封装改变state数据的方法
- getters.js <主要获取states class="js定义的state数据
- actions.js 处理异步数据或者封装多个mutations操作,比如ajax请求，要同时更新几个mutations的操作
- index.js 入口文件

## 当前城市从vuex里获取

在Home组件的NavMenu子组件中,分别进行如下操作
```js
import {mapGetters} from 'vuex'
computed: {
	...mapGetters([
	  'city'
	])
}
<span>{{ city }}</span>
```

在Cinema组件的NavMenu子组件中,分别进行如下操作
```js
import {mapGetters} from 'vuex'
computed: {
	...mapGetters([
	  'city'
	])
}
<span>{{ city }}</span>
```

在City组件的List子组件中，分别进行如下操作
```js
import {mapGetters, mapMutations} from 'vuex'
computed: {
	...mapGetters([
	  'city'
	])
},
methods: {
	...mapMutations([
	  'setCity'
	])
},
// 分别在对应的列表增加click事件
@click="setCurrentCity(item.name)"
@click="setCurrentCity(innerItem.name)"

setCurrentCity(city) {
  this.setCity(city);
  this.$router.push('/home');
}

```


