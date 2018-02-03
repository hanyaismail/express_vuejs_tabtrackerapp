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
import SongHistoryService from '@/services/SongHistoryService'	
import SongMetadata from './SongMetadata'
import Youtube from './Youtube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import {mapState} from 'vuex'

export default {
	data() {
		return {
			song: null
		}
	},

	components: {
		SongMetadata,
		Youtube,
		Lyrics,
		Tab
	},

	computed: {
		...mapState([
			'isUserLoggedIn',
			'user',
			'route'
		])
	},

	async mounted () {
		const songId = this.route.params.songId
		console.log(`songId: ${songId}`)
		console.log('ViewSong Index mounted')
		this.song = (await SongsService.show (songId)).data
		console.log(this.song)

		if (this.isUserLoggedIn) {
			console.log('ViewSong Index if UserLoggedIn')
			SongHistoryService.post({
				songId: songId, 
			})
		}
	}
}
</script>

<style scoped>
</style>