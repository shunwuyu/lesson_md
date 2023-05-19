import { IConfig } from './modal.type';
const config: IConfig = {
  style: {
    // 遮罩透明度，默认 0.7
    opacity: 0.7
  },
  props: {
    // 是否显示右上角的关闭按钮，默认开启
    close: true,
    // 点击蒙层是否允许关闭，默认开启
    maskClose: true
  }
};
export default config;