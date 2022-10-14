// - 检测当前宿主环境是否是浏览器
export const inBrowser = typeof window !== 'undefined'
// 获取当浏览器的user Agent
export const UA = inBrowser && window.navigator
.userAgent.toLowerCase()
// IE浏览器判断
export const isIE = UA && /msie|trident|edg/.test(UA)
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge