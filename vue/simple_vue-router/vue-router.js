class VueRouter {
  constructor (Vue, options) {
    this.$options = options;
    this.routeMap = {};
    this.app = new Vue({
      data: {
        current: '#/'
      }
    });
    this.init();
    this.createRouteMap(this.$options);
    this.initComponent(Vue);
  }
  init() {
    window.addEventListener('load', this.onHashChange.bind(this), false);
    window.addEventListener('hashchange', this.onHashChange.bind(this), false);
  }
  createRouteMap (options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item.component;
    });
  }
  initComponent (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      template: '<a :href="to"><slot></slot></a>'
    });

    const _this = this;
    Vue.component('router-view', {
      render (h) {
        var component = _this.routeMap[_this.app.current];
        return h(component);
      }
    });
  }

  getHash () {
    return window.location.hash.slice(1) || '/';
  }

  onHashChange () {
    this.app.current = this.getHash();
  }
}