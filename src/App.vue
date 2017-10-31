<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'app',
//		mounted(){
//			this.axios.get('/api/leftNav').then((response) => {
//			  console.log(response.data)
//			})
//		},
		computed:{
			total(){
				return this.$store.state.count
			}
		}
	};
</script>