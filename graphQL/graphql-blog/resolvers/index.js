const articles = require("../data/articles.json");
const articleContent = require("../data/articleContent.json");

const resolvers = {
  Query: {
    fetchArticles() {
      return articles;
    },
    getAllCategories() {
      return articles.reduce((pre, cur) => {
        const cate = pre.find(_ => _.name === cur.category);
        if (cate) {
          cate.num++;
        } else {
          const obj = {
            name: cur.category,
            num: 1
          };
          pre.push(obj);
        }
        return pre;
      }, [])
    },
    getArticleContent(_, { id }) {
      return articleContent.find(val => val.id === id);
    }
  },

  Mutation: {
    articleIsRead(_, { id }) {
      const article = articles.find(val => val.id === id);
      
      if (!article) {
        throw new Error(`找不到id为 ${id} 的文章`);
      }

      if (article.isRead) {
        return article;
      }

      article.isRead = true;

      return article;
    }
  }
}

module.exports = resolvers;