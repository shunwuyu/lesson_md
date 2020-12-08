<template>
  <div id="app">
    <transition :name="transitionName" @afterLeave="clearTransition">
		  <router-view/>
	  </transition>
    <play-fixed></play-fixed>
    <transition name="list-view">
	  	<component :is="showlist && 'listView'"></component>
	  </transition>
  </div>
</template>

<script>
import playFixed from "@/components/playFixed";
import listView from "@/components/list";
import { mapState } from "vuex";
import store from "./store";
export default {
  name: "app",
  data() {
    return {
      prevRoutes: []
    };
  },
  watch: {
    $route(to, from) {
      if (!(to.meta.noPageAnimation || from.meta.noPageAnimation)) {
        if (to.name === this.prevRoutes[this.prevRoutes.length - 1]) {
          store.commit("transition/setTransition", "turn-off");
          this.prevRoutes.pop();
        } else {
          if (from.name != null) {
            store.commit("transition/setTransition", "turn-on");
            this.prevRoutes.push(from.name);
          }
        }
      }
    }
  },
  computed: {
    ...mapState("transition", ["transitionName"]),
    ...mapState("list", { showlist: "show" })
  },
  methods: {
    // Clear Transition Effects After Each Switch
    clearTransition() {
      store.commit("transition/setTransition", "");
    },
    _openlist(el, done) {
      let lisview = el.children[0];
      lisview.classList.add("active");
      // setTimeout(() => {
      // 	done()
      // }, 500);
    }
  },
  components: {
    playFixed,
    listView
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
