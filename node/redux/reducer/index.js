const { combineReducers } = require('redux');
const filmReducer = require('./filmReducer.js');
const filterReducer = require('./filterReducer.js');

module.exports = combineReducers({
  films: filmReducer,
  filter: filterReducer
});