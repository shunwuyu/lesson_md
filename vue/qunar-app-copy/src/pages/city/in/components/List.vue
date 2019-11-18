<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="area-city">
          <div class="city-button location-city" @click="handleCityClick()">{{this.currentCity}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="area-city">
          <div
            class="city-button"
            v-for="city of hotCities"
            :key="city.id"
            @click="handleCityClick(city.name)"
          >{{city.name}}</div>
        </div>
      </div>
      <div class="area">
        <div class="cities">
          <div class="city-character-list" 
          v-for="(val, key) of cities" 
          :key="key" :ref="key">
            <!-- 一层循环出 key 按字母来的大分类 -->
            <div class="title">{{key}}</div>
            <div class="area-city">
              <!-- 二 层循环 把 具体的内容拿出来 -->
              <div
                class="city-item border-bottom"
                v-for="item of val"
                :key="item.id"
                @click="handleCityClick(item.name)"
              >{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    character: String
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  methods: {
    handleCityClick(city) {
      if (city) {
        this.changeCity(city);
      }
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  watch: {
    character() {
      console.log("this.character", this.character);
      const element = this.$refs[this.character][0];
      if (this.character) {
        this.scroll.scrollToElement(element);
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";

.list {
  overflow: hidden;
  position: absolute;
  top: 2.22rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    .title {
      height: 0.24rem;
      line-height: 0.24rem;
      font-size: 0.26rem;
      padding: 0.24rem 0.3rem;
      background: $homeBgColor;
    }
    .area-city {
      padding: 0.1rem 0.5rem 0.1rem 0.24rem;
      overflow: hidden;
      .location-city {
        background: $bgColor;
        color: #fff;
      }
      .city-button {
        float: left;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.26rem;
        width: 29%;
        text-align: center;
        margin: 0.1rem;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
    .cities {
      .city-character-list {
        .area-city {
          padding: 0;
          .city-item {
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.26rem;
            padding: 0.1rem 0.5rem 0.1rem 0.34rem;
          }
        }
      }
    }
  }
}
</style>
