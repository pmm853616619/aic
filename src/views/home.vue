<template>
	<div id="home">
		<div class="aaa">
			123
		</div>
		<Header></Header>
	</div>
</template>
<script>
	import header from '@/components/header.vue'
	export default {
		name: 'home',
		data() {
			return {

			}
		},
		components: {
			'Header': header
		}
	}
</script>
<style>
	.aaa{
		position: fixed;
		top: 50px;
	}
</style>
