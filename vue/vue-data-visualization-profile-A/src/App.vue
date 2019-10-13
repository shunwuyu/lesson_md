<template>
  <div class="app" id="app">
    <div class="banner">
      <img src="http://cv.jsliang.top/static/img/banner.90eed9a.png" alt="">
    </div>
    <!-- 第一行 -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
        <!-- <router-view name="PartOne"/> -->
        <part-one />
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="part">
        <!-- <router-view name="PartTwo"/> -->
        <part-two />
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
        <part-three />
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
        <!-- PartFour -->
        <part-four />
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
        PartFive
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
        PartSix
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
        PartSeven
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PartOne from './components/PartOne';
import PartTwo from './components/PartTwo';
import PartThree from './components/PartThree';
import PartFour from './components/PartFour';
export default {
  name: "App",
  components: {
    PartOne,
    PartTwo,
    PartThree,
    PartFour
  }
};
</script>

<style>
body {
  background: #011128;
  color: #fff;
}
.app {
  width: 100%;
}
.part {
  padding: 20px;
}
.banner img {
  width: 100%;
  height: 80px;
}
p {
  text-align: center;
}
</style>