export default {
  data() {
    return {
      time: null
    }
  },
  methods: {
    getTimeFromBackend() {
      this.time = '2019-10-01';
    }
  },
  mounted() {
    this.getTimeFromBackend(); 
    setTimeout(() => {
      this.time = '2019-10-02'
    }, 3000);
  }
}