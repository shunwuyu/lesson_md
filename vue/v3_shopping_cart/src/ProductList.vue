<template>
    <ul>
        <li
            v-for="product in products"
            :key="product.id"
        >
        {{ product.title }} 
        </li>
    </ul>
</template>
<script>
import { mapState } from 'vuex'
// console.log(mapState)
export default {
    computed: {
        products: mapState()
    }
}
</script>