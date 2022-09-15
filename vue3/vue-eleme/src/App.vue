<template>
  <div>
    <!-- {{count}} -->
    <v-header :seller="seller"></v-header>
    <router-view />
  </div>
</template>
<script>
import {getSellerRequest} from './api/request'
import header from './components/header/header.vue'

export default {
  data() {
    return {
      seller: {}
    }
  },
  mounted() {
    const fetchData = async () =>  {
      const { data } = await getSellerRequest();
      this.seller = data
    }
    fetchData();
  },
  components: {
    'v-header': header
  }
}
</script>
