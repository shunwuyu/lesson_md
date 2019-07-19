import Vue from 'vue'
import List from '../components/list.vue'

[List].forEach((component) => {
    Vue.component(component.name, component)
})
