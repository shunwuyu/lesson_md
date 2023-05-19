import { App, createVNode, render } from 'vue';
import Modal from './Modal.vue';
import { IConfig, IInstance, IModal } from './modal.type';
import config from './config';

Modal.install = (app: App, options: IConfig = {}) => {
  Object.assign(config.style, options.style || {});
  Object.assign(config.props, options.props || {});

  app.component(Modal.name, Modal);

  app.config.globalProperties.$modal = {
    show({
      title = '',
      content = '',
      close = config.props!.close,
      maskClose = config.props!.maskClose,
      opacity = config.style!.opacity,
      onConfirm,
      onCancel
    }) {
      const container = document.createElement('div');
      const vnode = createVNode(Modal);
      render(vnode, container);
      const instance = vnode.component as IInstance;
      document.body.appendChild(container);

      const { props, _hub } = instance;

      const _closeModal = () => {
        props.modelValue = false;
        container.parentNode!.removeChild(container);
      };

      Object.assign(_hub, {
        t: app.config.globalProperties.$t,
        async 'on-confirm'() {
          if (onConfirm) {
            const fn = onConfirm();
            if (fn && fn.then) {
              try {
                props.loading = true;
                await fn;
                props.loading = false;
                _closeModal();
              } catch (err) {
                // 发生错误时，不关闭弹框
                console.error(err);
                props.loading = false;
              }
            } else {
              _closeModal();
            }
          } else {
            _closeModal();
          }
        },
        'on-cancel'() {
          onCancel && onCancel();
          _closeModal();
        }
      });

      Object.assign(props, {
        isTeleport: false,
        modelValue: true,
        title,
        content,
        close,
        maskClose,
        opacity
      });
    }
  } as IModal;
};
export type{ IConfig };
export default Modal;