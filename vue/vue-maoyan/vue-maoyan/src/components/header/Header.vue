<template>
  <div class="header">
    <div class="header-left" v-if="back" @click="goBack">
      <span class="iconfont icon-zuojiantou"></span>
    </div>
  	<h1 class="title" v-text="title"></h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
	props: {
		title: {
			type: String,
			default: ''
		},
		back: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		goBack() {
			this.$emit('goBack')
		}
	}
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/variable.styl'
	.header
		height: 50px
		color: #fff
		background: $bgColor
		border-bottom: 1px solid #e54847
		position: relative
		.header-left
			position: absolute
			left: 10px
			top: 16px
			.icon-zuojiantou
				font-size:20px
		.title
			font-size: 18px
			font-weight: 400
			text-align: center
			line-height: 50px
			color: #fff
</style>
