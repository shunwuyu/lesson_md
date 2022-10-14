const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    // console.log(`${serverUrl}users/shunwuyu/repos`);
    const { data: idList } = await this.ctx.curl("https://api.github.com/users/shunwuyu/repos", {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`,
      },
      dataType: 'json',
    });
    // console.log(idList, '------');

    // parallel GET detail
    const newsList = await Promise.all(
      
      Object.keys(idList).map(key => {
        // console.log(idList, key, '++++++');
        const url = `https://api.github.com/repos/shunwuyu/${idList[key].name}`;

        console.log(url);
        return this.ctx.curl(url, { dataType: 'json' });
      })
    );
    return newsList.map(res => res.data);
  }
}

module.exports = NewsService;