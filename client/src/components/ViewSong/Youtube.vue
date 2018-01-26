<template>
	<panel title="Youtube">
		<youtube 
			:video-id="youtubeId"
			:player-width= "500"
			:player-height= "233">
			
		</youtube>
	</panel>
</template>

<script>
// import Panel from '@/components/panel'
import Panel from '@/components/Panel'

export default {
	components: {
		Panel
	},

	props: [
		'youtubeId'
	]
}
</script>

<style>
</style>