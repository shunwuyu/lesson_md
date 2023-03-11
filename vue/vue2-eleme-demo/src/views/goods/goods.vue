<template>
<div>
    fdfdfdfd
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}"
              @click="selectMenu(index,$event)">
            <span class="text border-1px">
                <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
import response from '../../mock/data/goods.json'
export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        
      }
    },
    computed: {
        currentIndex() {
            return 0
        }
    },
    methods: {
        selectMenu() {

        }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        this.goods = response.data
    }
}
</script>

<style scoped>

</style>