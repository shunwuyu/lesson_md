import axios from 'axios'
import Vue from 'vue'

const isServer = Vue.prototype.$isServer || process.server
const baseURL = isServer ? `${process.env.DOMAIN}/api` : `${window.location.origin}/api`
console.log(baseURL);
const ajax = axios.create({
    baseURL: baseURL,
    responseType: 'json',
    withCredentials: true,
})

export default ajax