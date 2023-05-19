import { getCurrentInstance } from 'vue';
import { IInstance } from '../modal.type';
import defaultLang from './lang/zh-CN';

export const t = (...args: any[]): string => {
  const instance = getCurrentInstance() as IInstance;
//   console.log(instance, './/////');
  const _t = instance._hub.t;
  if (_t) return _t(...args);

  const [path] = args;
  const arr = path.split('.');
  let current: any = defaultLang,
    value: string = '',
    key: string;

  for (let i = 0, len = arr.length; i < len; i++) {
    key = arr[i];
    value = current[key];
    if (i === len - 1) return value;
    if (!value) return '';
    current = value;
  }
  return '';
};