<template>
  <div class="content">
    <div :id="hero.id" 
    class="item"
     v-for="(hero, index) in heroes" :key="index">
      <div class="item-body">
        <div class="avatar">
          <img :src="hero.src" alt />
        </div>
        <div class="info">{{hero.name}}</div>
      </div>
    </div>
    <DestoryHero 
    v-for="id in lostHeroId"
    :key="id"
    />
    <p>html2canvas 演示</p>
    <div id="good">
      <p>100元</p>
      <p>砍一刀</p>
    </div>
    <div id="anotherGood">
      <canvas />
    </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
export default {
  props: {
    heroes: Array,
    lostHeroId: Array
  },
  methods: {
    // 回调 - promise - async
    convertImg(good) {
      html2canvas(good)
      .then($canvas => {
        document.body.appendChild($canvas);
        const ctx = $canvas.getContext('2d');
        // <canvas width="" height=""/>
        const { width, height } = $canvas;
        const originalData = ctx.getImageData(0, 0, width, height);
        console.log(width, height, originalData);
        const anotherCanvas = document
        .querySelector('#anotherGood canvas');
        const ctx2 = anotherCanvas.getContext('2d');
        const imgData = ctx2.createImageData(width, height);
        console.log(imgData);
        for (let x = 0; x < width; ++x) {
          for (let y = 0; y < height; ++y) {
            const index = (y * width + x) * 4;
            for (let offset = 0; offset < 4; ++ offset) {
              imgData.data[index + offset] = 
              originalData.data[index + offset];
            }
          }
        }
        ctx2.putImageData(imgData, 0, 0);
      })
    }
  },
  mounted() {
    const good = document.getElementById('good');
    this.convertImg(good);
  }
};
</script>
<style scoped lang="scss">
.content {
  max-width: 1000px;
  margin: 0 auto;
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
}
</style>