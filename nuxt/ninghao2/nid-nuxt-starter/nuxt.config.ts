export default defineNuxtConfig({
    ssr: true,
  
    modules: [],
  
    runtimeConfig: {
      public: {
        apiBaseUrl: 'https://nid-node.ninghao.co',
      },
    },
  });