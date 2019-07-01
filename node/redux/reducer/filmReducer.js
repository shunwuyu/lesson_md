module.exports =  function filmReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      // 更新 state 中的 films 字段
      return [{
        id: action.id,
        name: action.name
      }, ...state];
    case 'DELETE_FILM':
      return state.filter(film =>
        film.id !== action.id
      );
    default:
      return state;
  }
}