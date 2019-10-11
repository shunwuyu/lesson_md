<template>
  <div id="app">
    <Main />html2Canvas 练习：
    <div id="source">
      <h2>h2</h2>
    </div>
    <button>html to canvas copy</button>
    <div id="copy"></div>
    <div id="copy1">
      <canvas id="canvas1" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import html2canvas from "html2canvas";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Main
  },
  methods: {
    async copy(s) {
      const $canvas = await html2canvas(s, {
        allowTaint: true
      });
      const { width, height } = $canvas;
      // document.getElementById('copy').appendChild($canvas);
      // get a 2d rendering context from $canvas
      const ctx = $canvas.getContext("2d");
      // copy a rectangular area marked by 4 parameter. A ImageData obj has three property, height,width and data.
      // 复制画布上指定矩形的像素数据
      const originalData = ctx.getImageData(0, 0, width, height);
      console.log("originalData", originalData);
      const copy2 = document.getElementById("canvas1");
      const ctx2 = copy2.getContext("2d");
      const imgData = ctx2.createImageData(width, height);
      for (let x = 0; x < width; ++x) {
        for (let y = 0; y < height; ++y) {
          const pixelIndex = (y * width + x) * 4;
          for (let offset = 0; offset < 4; ++offset) {
            imgData.data[pixelIndex + offset] =
              // 第 i 个像素
              originalData.data[pixelIndex + offset];
          }
        }
      }
      console.log('imgData', imgData);
      ctx2.width = width;
      ctx2.height = height;
      ctx2.putImageData(originalData, 0, 0);
      console.log(222);
    }
  },
  mounted() {
    const s = document.querySelector("#source");
    // console.log(s);
    this.copy(s);
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@keyframes gauntlet {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -3760px 0;
  }
}

@keyframes heroBack {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
