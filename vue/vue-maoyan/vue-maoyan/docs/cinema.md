
## 影院基础模版
因为我们上一章已经封装了公共头部组件和底部主见，这里直接拿来使用
```html
<template>
  <div>
  	<common-header :title="title" :back="true" @goBack="goBack"></common-header>
    <common-footer :bottom-active="bottomActive"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../../components/header/Header'
import CommonFooter from '../../components/footer/Footer'
export default {
  name: 'Cinema',
  components: {
    CommonHeader,
    CommonFooter
  },
  data () {
    return {
      title: '影院',
      bottomActive: 1
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>
<style>
</style>
```

在router\index.js 增加影院组件的路由
```js
import Cinema from '@/pages/cinema/Cinema'
{
  path: '/cinema',
  name: 'cinema',
  component: Cinema
}
```

## 在cinema\components\nav-menu创建NavMenu组件
```html
<template>
  <div class="nav-menu scale-1px">
    <router-link to='/city' class="left">
      <div>
        	<span>北京</span>
          <span class="iconfont icon-xiala"></span>
      </div>
    </router-link>
    <router-link to='/search' class="right">
      <div>
        <span class="iconfont icon-sousuo"></span>  
        <span>搜影院</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    menuActive: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      menuList: [
        {
          id: 0,
          title: '正在热映'
        },
        {
          id: 1,
          title: '即将上映'
        }
      ]
    }
  },
	methods: {
    changeMenu(menuId) {
      this.$emit('changeMenu', menuId);
    }
	}
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/variable.styl'
	.nav-menu
    height: 44px
    display: flex
    background: #f5f5f5
    a
      text-decoration: none;
    .left
      flex: 0 0 80px
      float: left
      color: #666
      line-height:44px
      text-align: center
      .icon-xiala
        font-size:14px
    .right
      flex: 1
      color: $bgColor
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      line-height: 28px
      font-size: 13px;
      color: #b2b2b2;
      margin-left: 18px;
      border: .5px solid #e6e6e6;
      border-radius: 5px;
      margin-right: 15px;
      margin-top: 8px;
      background: #fff;
</style>
```

在cinema组件引入NavMenu组件
```js
import NavMenu from './components/nav-menu/NavMenu'
components: {
   CommonHeader,
   CommonFooter,
   NavMenu
},
```

## Loading 组件

这里我们编写个loading组件，在ajax没有返回信息的时候使用loading组件。

在src\components\loading 创建loading组件
```html
<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif">
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
  }
</script>
<style scoped lang="stylus">
  .loading
    width: 100%
    text-align: center
    .desc
      line-height: 20px
      color: $color-text-l
</style>
```

在cinema组件引入Loading组件
```js
import NavMenu from './components/nav-menu/NavMenu'
components: {
   CommonHeader,
   CommonFooter,
   NavMenu
},
```

- 获取数据

在static\mock目录创建cinema.json
```json
{
  	"code": 1,
	"cinemas": [
		{
			"id": 25654,
			"mark": 0,
			"nm": "奥斯卡影城又一城店",
			"sellPrice": "29",
			"addr": "中原区高新区科学大道89号升龙又一城广场3楼",
			"distance": "2.9km",
			"tag": {
				"allowRefund": 0,
				"buyout": 0,
				"cityCardTag": 0,
				"deal": 0,
				"endorse": 1,
				"hallTypeVOList": [ ],
				"sell": 1,
				"snack": 1,
				"vipTag": "折扣卡"
			},
			"promotion": {
				"cardPromotionTag": "开卡特惠，首单2张立减3元"
			}
		},
		{
			"id": 25984,
			"mark": 0,
			"nm": "万达影城(郑州公园茂店)",
			"sellPrice": "29.5",
			"addr": "中原区雪松路与翠竹街交叉口潮流茂4楼万达影城",
			"distance": "3.9km",
			"tag": {
				"allowRefund": 0,
				"buyout": 0,
				"cityCardTag": 0,
				"deal": 0,
				"endorse": 0,
				"hallTypeVOList": [ ],
				"sell": 1,
				"snack": 0
			},
			"promotion": { }
		},
		{
			"id": 16560,
			"mark": 0,
			"nm": "CGV影城(高新IMAX店)",
			"sellPrice": "34",
			"addr": "中原区高新区科学大道与瑞达路交叉口正弘生活广场4层CGV影城",
			"distance": "4.8km",
			"tag": {
				"allowRefund": 0,
				"buyout": 0,
				"cityCardTag": 0,
				"deal": 0,
				"endorse": 0,
				"hallType": [
					"IMAX厅"
				],
				"hallTypeVOList": [
					{
						"name": "IMAX厅",
						"url": ""
					}
				],
				"sell": 1,
				"snack": 1,
				"vipTag": "折扣卡"
			},
			"promotion": {
				"cardPromotionTag": "折扣卡限时¥20促销开卡"
			}
		},
		{
			"id": 25727,
			"mark": 0,
			"nm": "中影星美国际影城(高新睿达广场店)",
			"sellPrice": "19.9",
			"addr": "中原区郑州高新区瑞达路与合欢街交叉口睿达广场3层",
			"distance": "5.3km",
			"tag": {
			"allowRefund": 1,
			"buyout": 0,
			"cityCardTag": 0,
			"deal": 0,
			"endorse": 1,
			"hallTypeVOList": [ ],
			"sell": 1,
			"snack": 1,
			"vipTag": "折扣卡"
			},
			"promotion": {
				"cardPromotionTag": "开卡特惠，首单2张立减5元"
			}
		},
		{
			"id": 8925,
			"mark": 0,
			"nm": "奥斯卡高新影城(科学大道店)",
			"sellPrice": "29",
			"addr": "中原区科学大道53号中原广告产业园4楼",
			"distance": "5.7km",
			"tag": {
				"allowRefund": 0,
				"buyout": 0,
				"cityCardTag": 0,
				"deal": 0,
				"endorse": 1,
				"hallTypeVOList": [ ],
				"sell": 1,
				"snack": 1,
				"vipTag": "折扣卡"
			},
			"promotion": {
				"cardPromotionTag": "开卡特惠，首单2张立减3元"
			}
		},
		{
			"id": 24132,
			"mark": 0,
			"nm": "悦影绘影城(华强广场店)",
			"sellPrice": "24",
			"addr": "中原区电厂路华强广场4楼",
			"distance": "8.6km",
			"tag": {
				"allowRefund": 1,
				"buyout": 0,
				"cityCardTag": 0,
				"deal": 0,
				"endorse": 1,
				"hallType": [
					"杜比全景声厅"
				],
				"hallTypeVOList": [
					{
						"name": "杜比全景声厅",
						"url": ""
					}
				],
				"sell": 1,
				"snack": 1,
				"vipTag": "折扣卡"
			},
			"promotion": {
				"cardPromotionTag": "开卡特惠，首单2张立减5元"
			}
		},
		{
			"id": 24864,
			"mark": 0,
			"nm": "横店星光影城",
			"sellPrice": "38",
			"addr": "荥阳市国泰路与惠民路交叉口东南侧正上豪布斯卡五楼",
			"distance": "8.7km",
			"tag": {
				"allowRefund": 1,
				"buyout": 0,
				"cityCardTag": 0,
				"deal": 0,
				"endorse": 1,
				"hallType": [
					"杜比全景声厅"
				],
				"hallTypeVOList": [
				{
					"name": "杜比全景声厅",
					"url": ""
				}
				],
				"sell": 1,
				"snack": 1,
				"vipTag": "折扣卡"
			},
			"promotion": {
				"cardPromotionTag": "限时¥27.9促销开卡，首单更优惠,开卡即赠价值¥48元礼包"
			}
		}
	]
}
```

在src\api目录创建cinema.js
```js
import axios from 'axios'

export function getCinemaList() {
	return axios.get('/api/cinema.json', {}).then((res) => {
		return Promise.resolve(res.data)
	})
}
```

## 内容组件

在nav-menu 后添加内容组件html结构

```html
<div class="content">
  <scroll :data="cinemaList" class="wrap_content">
    <div>
      <div class="cinema" v-for="(cinema,index) of cinemaList" :key="index">
        <div class="title">
          <span>{{ cinema.nm }}</span>
          <span class="price-block">
            <span class="price">{{ cinema.sellPrice }}</span><span class="q">元起</span>
          </span>
        </div>
        <div class="location">
          <span class="address">{{ cinema.addr }}</span>
          <span class="distance">{{ cinema.distance }}</span>
        </div>
        <div class="label-block">
          <span class="label endorse">改签</span>
          <span class="label snack">小吃</span>
        </div>
        <div v-if="cinema.promotion" class="discount-block">
          <span class="discount-label-icon">卡</span>
          <span class="discount-label-text">开卡特惠，首单2张立减3元</span>
        </div>
      </div>
    </div>
  </scroll>
</div>
```
```css
  @import '~stylus/variable.styl'
  .loading
    margin-top:12px;
  .content
    position: fixed
    width: 100%
    top: 96px
    bottom: 56px
    .wrap_content
      overflow: hidden
      height: 100%
      .cinema
        padding: 13px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        .title
          height: 23px;
          line-height: 23px;
          font-size: 16px;
          color: #000;
          .price-block
            padding-top: 9px;
            padding-left: 3px;
            color: $bgColor
            .price
              font-size: 18px;
            .q
              margin-left: 3px;
        .location
          margin-top: 6px;
          font-size: 13px;
          color: #666;
          .distance
            margin-left: 5px;
        .label-block
          height: 17px;
          line-height: 17px;
          margin-top: 6px;
          margin-bottom: 4px;
          overflow: hidden;
          font-size: 0;
          flex-shrink: 0;
          .label
            position: relative;
            display: inline-block;
            padding: 0 3px;
            height: 15px;
            line-height: 15px;
            border-radius: 2px;
            font-size: 12px;
            margin-right:6px;
            &.endorse
              color: #589daf;
              border: 1px solid #589daf;
            &.snack
              color: #f90;
              border: 1px solid #f90;
        .discount-block
          color: #999;
          margin-bottom: 4px;
          .discount-label-icon
            padding: 0 2px;
            height: 14px;
            line-height: 14px;
            border-radius: 2px;
            font-size: 12px;
            margin-right:6px;
            display: inline-block;
            color: $bgColor;
            border: 1px solid $bgColor;
          .discount-label-text
            margin-left: 0;
            font-size: 11px;
```

?> 至此，cinama组件已经完成，效果如下:
![image](_images/cinama/cinama.png)











