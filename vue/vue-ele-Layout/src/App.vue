<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :offset="8" :span="8">aaa</el-col>
      <el-col :span="8">bbb</el-col>
    </el-row>
    <el-button>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </el-button>
    <a-component />
    <b-component />
  </div>
</template>

<script>
import ElRow from "./components/el-row";
import ElCol from "./components/el-col";
import ElButton from "./components/Button";
import HelloWorld from "./components/HelloWorld";
import AComponent from './components/A';
import BComponent from './components/B';

export default {
  name: "App",
  components: {
    HelloWorld,
    ElRow,
    ElCol,
    ElButton,
    AComponent,
    BComponent
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
