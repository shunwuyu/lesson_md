import weiboEmoji from './component/weibo_emoji'
const emoji = {
    install(Vue, options) {
      console.log('---------------');
        Vue.component(weiboEmoji.name, weiboEmoji);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(emoji);
}
export default emoji