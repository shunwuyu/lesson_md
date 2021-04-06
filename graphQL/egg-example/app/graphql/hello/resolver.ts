// ，就是针对你暴露的查询接口，调用相应的connector去取数即可
export default {
  Query: {
    hellos(_root: any, {}, { connector }) {
      return connector.hello.hellos();
    },
  },
};