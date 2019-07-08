import { combineReducers } from '../redux-source/index'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
const val1 = (state = 'val1', action) => {
  switch (action.type) {
    case 'HANDLE_1':
      return action.val;
    default:
      return state
  }
}
const val2 = (state = 'val1', action) => {
  switch (action.type) {
    case 'HANDLE_2':
      return action.val;
    default:
      return state
  }
}
export default combineReducers({
  val1,
  val2,
  todos,
  visibilityFilter
})
