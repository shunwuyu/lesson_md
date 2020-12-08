import store from 'store2';

export default {
  city: store.local.get('city') || '北京'
}