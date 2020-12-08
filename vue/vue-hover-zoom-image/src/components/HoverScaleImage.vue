<template>
  <div class="magnifier">
    <!-- 小图 -->
    <div
      class="small-box"
      @mouseover="handOver"
      @mousemove="handMove"
      @mouseout="handOut"
      :style="{ 
        width: configs.width + 'px', 
        height: configs.height + 'px'
      }"
    >
      <!--  -->
      <img class="smallPic" :src="src" />
      <div
        class="magnifier-zoom"
        v-show="showMask"
        :style="{
          background: configs.maskColor,
          height: configs.maskWidth + 'px',
          width: configs.maskHeight + 'px', 
          opacity: configs.maskOpacity, 
          transform: transformMask
        }"
      ></div>
    </div>
    <!-- 大图, 注意误差 -->
    <div
      class="magnifier-layer"
      v-show="showMagnifier"
      :style="{ 
        width: configs.width + 'px', 
        height: configs.height + 'px', 
        left: configs.width + 500 + 'px' 
      }"
    >
      <div class="big-box" :style="{
          left: moveLeft,
          top: moveTop
        }">
        <img
          :src="bigSrc"
          :style="{ 
              maxWidth: configs.bigWidth + 'px', 
              maxHeight: configs.bigHeight + 'px' 
            }"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgObj: {},
      moveLeft: 0,
      moveTop: 0,
      transformMask: `translate(0px, 0px)`,
      showMagnifier: true,
      showMask: true,
      init: false
    };
  },
  computed: {
    // bigWidth() {
    //   return this.configs.scale * this.configs.width;
    // },
    // bigHeight() {
    //   return this.configs.scale * this.configs.height;
    // }
  },
  props: {
    // 小图地址
    src: {
      type: String
    },
    // 大图地址
    bigSrc: {
      type: String
    },
    // 配置项
    configs: {
      type: Object,
      default() {
        return {
          width: 430, //放大区域
          height: 430, //放大区域
          bigWidth: 800,
          bigHeight: 800,
          maskWidth: 210, //遮罩
          maskHeight: 210, //遮罩
          maskColor: "rgba(25,122,255,0.5)", //遮罩样式
          maskOpacity: 0.6,
          scale: (800 - 430) / (430 - 210) //放大比例
        };
      }
    }
  },
  methods: {
    handOver() {
      // 计算小图框在浏览器中的位置
      // this.imgObj = this.$el.getElementsByClassName("small-box")[0];
      // this.imgRectNow = this.imgObj.getBoundingClientRect();
      this.showMagnifier = true;
      this.showMask = true;
    },
    handMove(e) {
      this.imgObj = this.$el.getElementsByClassName("small-box")[0];
      this.imgRectNow = this.imgObj.getBoundingClientRect();
      // 计算初始的遮罩左上角的坐标
      console.log(
        this.imgObj
      );
      let objX = e.clientX - this.imgRectNow.left;
      let objY = e.clientY - this.imgRectNow.top;
      // let objX = e.clientX;
      // let objY = e.clientY;
      //
      // 计算初始的遮罩左上角的坐标
      let maskX = objX - this.configs.maskWidth / 2;
      let maskY = objY - this.configs.maskHeight / 2;

      // 判断是否超出界限,并纠正
      maskY = maskY < 0 ? 0 : maskY;
      maskX = maskX < 0 ? 0 : maskX;
      if (maskY + this.configs.maskHeight >= this.imgRectNow.height) {
        maskY = this.imgRectNow.height - this.configs.maskHeight;
      }
      if (maskX + this.configs.maskWidth >= this.imgRectNow.width) {
        maskX = this.imgRectNow.width - this.configs.maskWidth;
      }
      // 遮罩移动
      this.transformMask = `translate(${maskX}px, ${maskY}px)`;

      // 背景图移动
      // 鼠标往右移动 我的大图 是往左移动的
      console.log(maskX, maskY);
      this.moveLeft = -maskX * this.configs.scale + "px";
      this.moveTop = -maskY * this.configs.scale + "px";
    },
    handOut() {
      this.showMagnifier = false;
      this.showMask = false;
    }
  }
};
</script>
<style scoped>
.magnifier {
  position: relative;
}
.smallPic {
  /* vertical-align:bottom */
  
}
.small-box {
  position: absolute;
  margin-left: 30px;
}
.magnifier-zoom {
  position: absolute;
  left: 0;
  top: 0;
}
.magnifier-layer {
  position: absolute;
  overflow: hidden;
  border: 1px solid #000;
}
.big-box {
  position: absolute;
}
</style>