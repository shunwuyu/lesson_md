import { defineStore } from "pinia";

export const mainStore = defineStore('main', {
    state: () => {
        return {
            msg: 'Hello World!!!!',
            count: 0
        }
    },
    getters: {

    },
    actions: {}
})