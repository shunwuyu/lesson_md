<template>
<button
@click="handleClick"
class="el-button"
:disabled="disabled || loading"
:autofocus="autofocus"
:type="nativeType"
:class="[
    type ? 'el-button--' + type : '',
    size ? 'el-button--' + size : '',
    {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
    }
]"
>
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
</button>
</template>
<script>
export default {
    props: {
        autofocus: Boolean,
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'medium'
        },
        disabled: Boolean,
        loading: Boolean,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
         },
    },
    comuted: {
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>
