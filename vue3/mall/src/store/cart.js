import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const count = ref(10)
    // async function updateCart() {
    //     const { data = [] } = await getCart()
    //     count.value = data.length
    // }
    return { 
        count,
        // updateCart 
    }
})