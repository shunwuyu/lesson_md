import { ComponentInternalInstance } from 'vue';
import { IModal } from '@/plugins/modal/modal.type';

declare global {
  interface IGlobalAPI {
    $modal: IModal;
  }
  interface ICurrentInstance extends ComponentInternalInstance {
    appContext: {
      config: { globalProperties: IGlobalAPI };
    };
  }
}
export {};