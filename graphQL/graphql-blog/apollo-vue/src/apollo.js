import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  // 你需要在这里使用绝对路径
  uri: 'http://localhost:4000/graphql'
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default apolloProvider;