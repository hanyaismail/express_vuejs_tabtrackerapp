<template>
	<v-layout>
		<v-flex xs6>
			<SongMetadata :song="song" />
			<Tab :song="song" />
		</v-flex>

		<v-flex xs6 class="ml-2">
			<Youtube :youtubeId="song.youtubeId" />
			<Lyrics :song="song" />
		</v-flex>
	</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'	
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import Youtube from './Youtube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
	data() {
		return {
			song: null
		}
	},

	components: {
		Panel,
		SongMetadata,
		Youtube,
		Lyrics,
		Tab
	},

	async mounted () {
		const songId = this.$store.state.route.params.songId

		this.song = (await SongsService.show (songId)).data
		console.log(this.song)
	}
}
</script>

<style scoped>
</style>