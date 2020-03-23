<template>
<div id="home_page">
  <!-- 首页组件化， PC 页面比较长 -->
  <navigation_bar>
  </navigation_bar>
  <main_navigation>
  </main_navigation>

  <!-- <LouPlus>
  </LouPlus>

  <Boutique>
  </Boutique>

  <RecentlyRecommendCourse>
  </RecentlyRecommendCourse>

  <BaseCourse>
  </BaseCourse>

  <BackendCourse>
  </BackendCourse>

  <CloudComputeBigDataCourse>
  </CloudComputeBigDataCourse>

  <TrainingCourse>
  </TrainingCourse>

  <LearningPath>
  </LearningPath>

  <SiteDescription>
  </SiteDescription> -->

</div>
</template>
<script>
const path = require('path') // require commonJS
const files = require.context(
  '@/components/home_page', false,
   /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  // console.log(key);
  const name = path.basename(key, '.vue')
  // console.log(name, '++++')
  // console.log(files(key).default)
  modules[name] = files(key).default
})

console.log(modules);

console.log(files);
export default {
  components: modules

}
</script>