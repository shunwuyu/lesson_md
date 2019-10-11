export class Store {
  constructor(options = {}, Vue) {
      this.options = options;
      this.getters = {}
      this.mutations = {};
      this.actions = {};
      const { commit, dispatch } = this;
      this.commit = (type) => {
        return commit.call(this, type);
      }
      this.dispatch = (type) => {
        return dispatch.call(this, type);
      }
      Vue.mixin({ beforeCreate: vuexInit });
      forEachValue(options.actions, (actionFn, actionName) => {
        registerAction(this, actionName, actionFn);
      });
      // console.log(this.options.getters);
      forEachValue(options.getters, (getterFn, getterName) => {
        registerGetter(this, getterName, getterFn);
      })
      forEachValue(options.mutations, (mutationFn, mutationName) => {
        registerMutation(this, mutationName, mutationFn)
      });
      this._vm = new Vue({
        data: {
            state: options.state
        }
    });
  }
  get state () {
    return this._vm._data.state;
  }
  commit(type) {
    this.mutations[type]();
  }
  dispatch(type) {
    return this.actions[type]();
  }
}
function vuexInit () {
  const options = this.$options
  if (options.store) {
      // 组件内部设定了store,则优先使用组件内部的store
      this.$store = typeof options.store === 'function'
      ? options.store()
      : options.store
  } else if (options.parent && options.parent.$store) {
      // 组件内部没有设定store,则从根App.vue下继承$store方法
      this.$store = options.parent.$store
  }
}

function registerGetter(store, getterName, getterFn) {
  Object.defineProperty(store.getters, getterName, {
      get: () => {
          return getterFn(store.state)
      }
  })
}

function registerMutation(store, mutationName, mutationFn) {
  store.mutations[mutationName] = () => {
      mutationFn.call(store, store.state);
  }
}

function registerAction(store, actionName, actionFn) {
  store.actions[actionName] = () => {
      actionFn.call(store, store)
  }
}

function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key));
}
