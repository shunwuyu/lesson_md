module.exports =  function filterReducer(state = 'default', action) {
  switch (action.type) {
    case 'CHANGE_FILTER_TYPE':
      return action.filter
    default:
      return state;
  }
}