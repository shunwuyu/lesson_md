1. 数据流通
  数据绑定 -> 数据流 
  vuex 三峡 
  - mongodb  -> api -> vuex ->  component
    1. 数据流源头在mongodb express 更数据库服务器通信
    store   state 两种获取方式
    this.$store.state.
    computed mapGetters 方法  state 读

    数据流
    node  :3000/users/  User.find()
      :3000/users/tag/:tag 数据的源头
      User.find({tags: tag}) 
      vue.config.js   proxy 传统的前后端
    api
      fetchUsers
      fetchUsersByTag
    vuex 接管一下 大型 
    读 this.$store.state.users
      this.$store.dispatch('fetchUsers')
    写  tag  change 
      mapActions('queryTag', evt)
    component App.vue  

  - 应用场景  vuex 设计思考 精彩 mongodb 索引

