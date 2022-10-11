/**
 * [
 *  {userName : '', content: ''}
 * ]
 */
/**
 * type: 
 */
export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      const {userName, content} = action;
      return [{ userName, content }, ...state];
    default:
      return state;
  }
}