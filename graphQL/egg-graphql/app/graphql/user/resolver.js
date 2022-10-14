'use strict';

module.exports = {
  Query: {
    user(root, { id }, ctx) {
      console.log(id, '----------------')
      return ctx.connector.user.fetchById(id);
    }
  },
};