<template>
  <div class="content">
    <!-- PENDING SNAPING DONE -->
    <!-- DONE REVERSING  PENDING-->
    <!-- time 透明度 0 -> 1 -->
    <div class="item"
      :class="{
        time: status === REVERSING && theLostHeroIds.indexOf(hero.id) > -1,
        hidden: hideDone.indexOf(hero.id) > -1,
        visible: status === PEDDING || status === REVERSING
      }"
      :id="hero.id"
      :ref="`hero-${hero.id}`"
      v-for="(hero, index) in heroes"
      :key="index">
      <div class="item-body">
        <div class="avatar">
          <img :src="hero.src"
            alt="" />
        </div>
        <div class="info">{{hero.name}}</div>
      </div>
    </div>
    <!-- @hide-hero="hideHero" -->
    <DustHero v-for="id in theLostHeroIds"
      :class="`hero-${id}`"
      :heroId="id"
      @hide-hero="hideHero"
      :key="`hero-${id}`"></DustHero>
  </div>
</template>

<script>
import DustHero from "./DustHero";
import { statusMixin } from "@/global/mixins";
import Bus from "@/global/Bus.js";
export default {
  name: "Content",
  props: {
    heroes: Array,
    status: String
  },
  data() {
    return {
      theLostHeroIds: [],
      hideDone: []
    };
  },
  mixins: [statusMixin],
  methods: {
    hideHero(id) {
      console.log('1', id);
      this.hideDone.push(id);
    }
  },
  components: {
    DustHero
  },
  created() {
    // Main 注册
    Bus.$on("hide-hero", id => {
      // 放进去一堆 要消失的英雄 ID
      this.theLostHeroIds.push(id);
    });
    Bus.$on("reverse-time", () => {
      this.hideDone = [];
      setTimeout(() => {
        this.$parent.changeStatus(this.PEDDING);
        this.theLostHeroIds = [];
      }, 2000);
    });
  },
  beforeDestroy() {
    Bus.$off("hide-hero");
    Bus.$off("reverse-time");
  }
};
</script>

<style lang="scss">
// hero num is 16
// top content 10 px 的 padding 自己 10px 总的有 4 个 280 
@for $i from 0 to 16 {
  .hero-#{$i + 1} {
    top: 20px + floor($i/4) * 280px;
    left: 20px + floor($i%4) * 245px;
  }
}

.visible {
  visibility: visible;
}
.hidden {
  visibility: hidden;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  scroll-behavior: smooth;
  position: relative;
  .item {
    flex: 1;
    height: 260px;
    margin: 10px;
    border: 1px solid #cecece;
    text-align: center;
    box-sizing: border-box;
    .avatar img {
      width: 200px;
      height: 200px;
    }
    .info {
      height: 30px;
      line-height: 30px;
    }
  }
  .time {
    animation: heroBack 2s linear;
  }
}
</style>

