<template>
	<v-layout>
		<v-flex xs6>
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
					</v-flex>

					<v-flex xs6>
						<img class="album-image" :src="song.albumImageUrl">
						<br>
						{{song.album}}
					</v-flex>
				</v-layout>				
			</panel>

			<panel title="Lyrics" class="mt-2">
				<textarea
					readonly
					v-model="song.lyrics">
				</textarea>
			</panel>
		</v-flex>

		<v-flex xs6 class="ml-2">
			<panel title="Youtube">
				<!-- <textarea
					readonly
					v-model="song.tab">
				</textarea> -->
			</panel>

			<panel title="Tab" class="mt-2">
				<textarea
					readonly
					v-model="song.tab">
				</textarea>
			</panel>
		</v-flex>
	</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'	
import Panel from '@/components/Panel'

export default {
	data() {
		return {
			song: null
		}
	},

	components: {
		Panel
	},

	async mounted () {
		const songId = this.$store.state.route.params.songId

		this.song = (await SongsService.show (songId)).data
		console.log(this.song)
	}
}
</script>

<style scoped>
.song {
	padding: 20px;
	height: 330px;
	overflow: hidden;
}

.song-title {
	font-size: 30px;
}

.song-artist {
	font-size: 24px;
}

.song-genre {
	font-size: 18px;
}

.album-image {
	width: 70%;
	margin: 0 auto;
}

textarea {
	width: 100%;
	height: 600px;
	font-family: monospace;
	border: none;
	border-style: none;
	border-color: transparent;
	overflow: auto;
	padding: 40px;
}

textarea:focus {
	border: none;
	border-style: none;
	border-color: transparent;
}
</style>