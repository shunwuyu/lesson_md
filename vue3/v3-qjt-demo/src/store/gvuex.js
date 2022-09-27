import { inject, reactive, computed } from 'vue'
const STORE_KEY = '__store__'
function createStore(options) {
    return new Store(options)
}
