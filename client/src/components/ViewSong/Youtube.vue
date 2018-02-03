<template>
	<panel title="Youtube">
		<div v-if="youtubeId">
		<youtube 
			:video-id="youtubeId"
			:player-width= "500"
			:player-height= "233">
			
		</youtube>
		</div>

		<div class="noYou" v-else>
			<h1>No Youtube Video :(</h1>
		</div>
	</panel>
</template>

<script>
export default {
	components: {
		
	},

	props: [
		'youtubeId'
	]
}
</script>

<style scoped>
.noYou {
	width: 500px;
	height: 204px;
	text-align: center;
}
</style>