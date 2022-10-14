const DataLoader = require('dataloader');
class UserConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
  }

  fetch(id) {
    const users = this.ctx.app.model.User.findAll({
      where: {
        id: id
      },
    }).then(us => us.map(u => u.toJSON()));
    return users;
  }

  fetchByIds(ids) {
    return this.loader.loadMany(ids);
  }

  fetchById(id) {
    console.log(id, 'fetchById--------------')
    return this.loader.load(id);
  }
}

module.exports = UserConnector;