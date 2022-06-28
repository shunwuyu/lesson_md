// let defaultState = {
//     banners: [
//         {id: 1, img: 'xx.jpg'},
//         {id: 1, img: 'xx.jpg'}
//     ],
//     list: [
//         {id: 1, img: 'xx.jpg', title: 'aaa'},
//         {id: 2, img: 'xx.jpg', title: 'bbb'}
//     ]
// }
// const reducer = (state=defaultState) => {
//     return state
// }

// export default reducer
// redux 提供了combineReducers 功能 ？
// 多个模块的数据， 合并到一起
import { combineReducers } from "redux";
// 一个redecer文件 放一类数据
import userReducer from './user';
// 每个reducer文件负责返回一个函数
// 固定的返回值 页面需要的状态
// 页面不在管理数据 
import singerReducer from './singer';
// combineReducers接受对象配置 
export default combineReducers({
    // key  取个名字 value 对应的reducer函数
    user: userReducer,
    singer: singerReducer
});