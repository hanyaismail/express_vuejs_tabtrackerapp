<template>
	<panel title="Song Metadata">
		<v-layout>
			<v-flex xs6>
				<div class="song-title">
					{{song.title}}
				</div>

				<div class="song-artist">
					{{song.artist}}
				</div>

				<div class="song-genre">
					{{song.genre}}
				</div>

				<v-btn
					dark
					class="cyan"
					@click="navigateTo({
						name: 'song-edit',
						params: {
							songId: song.id}
						})">
					Edit
				</v-btn>
			</v-flex>

			<v-flex xs6>
				<img class="album-image" :src="song.albumImageUrl">
				<br>
				{{song.album}}
			</v-flex>
		</v-layout>				
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
		'song'
	],

	methods: {
		navigateTo (route) {
			this.$router.push(route)
		}
	}
}
</script>

<style>
</style>