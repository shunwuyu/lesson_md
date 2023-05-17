<template>
  <div>
    <input v-model="keyword" />
    <ul>
      <li v-for="(item, index) in resultList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      resultList: [],
    };
  },
  watch: {
    keyword(newKeyword) {
      // 如果关键字不为空，则发起异步请求数据的操作
      if (newKeyword) {
        axios.get(`/api/search?keyword=${newKeyword}`).then(({ data }) => {
          this.resultList = data.result;
        });
      }
    },
  },
};
</script>