<template>
  <div ref="display"></div>
</template>
<script>
import Vue from "vue";
import randomStr from '../../utils/random_str.js';
export default {
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      html: "",
      js: "",
      css: "",
      // --------
      component: null,
      id: randomStr()
    };
  },
  methods: {
    // source：.vue 文件代码，即 props: code；type：分割的部分，也就是 template、script、style。
    getSource(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`);
      let openingTag = source.match(regex);

      if (!openingTag) return "";
      else openingTag = openingTag[0];

      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}>`)
      );
    },
    splitCode() {
      const script = this.getSource(this.code, "script").replace(
        /export default/,
        "return "
      );
      const style = this.getSource(this.code, "style");
      const template =
        '<div id="app">' + this.getSource(this.code, "template") + "</div>";
      //在分割的 <template> 外层套了一个 <div id="app">，这是为了容错，有时使用者传递的 code 可能会忘记在外层包一个节点，没有根节点的组件，是会报错的
      this.js = script;
      this.css = style;
      this.html = template;
    },
    renderCode() {
      this.splitCode();

      if (this.html !== "" && this.js !== "") {
        const parseStrToFunc = new Function(this.js)();

        parseStrToFunc.template = this.html;
        const Component = Vue.extend(parseStrToFunc);
        this.component = new Component().$mount();

        this.$refs.display.appendChild(this.component.$el);

        // ---------------------
        if (this.css !== '') {
          const style = document.createElement('style');
          style.type = 'text/css';
          style.id = this.id;
          style.innerHTML = this.css;
          document.getElementsByTagName('head')[0].appendChild(style);
        }
      }
    },
    destroyCode () { // 当 Display 组件销毁时，也要手动销毁 extend 创建的实例以及上面的 css：
      const $target = document.getElementById(this.id);
      if ($target) $target.parentNode.removeChild($target);

      if (this.component) {
        this.$refs.display.removeChild(this.component.$el);
        this.component.$destroy();
        this.component = null;
      }
    }
  },
  mounted() {
    this.renderCode();
  },
  beforeDestroy () {
    this.destroyCode();
  },
  watch: {
    code () {
      this.destroyCode();
      this.renderCode();
    }
  }
};
</script>