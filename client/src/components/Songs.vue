<template>
	<v-layout column>
		<v-flex xs6 offset-xs3>
      		<div class="white elevation-2">
			      <panel title="Songs">
			      	<v-btn
			          class="cyan accent-2"
			          @click="navigateTo({name: 'song-create'})"
			          slot="action"
			          light
			          medium
			          absolute
			          right
			          middle
			          fab>
			          <v-icon>add</v-icon>
			        </v-btn>
						<div class="song" v-for="song in songs"
							:key="song.id">

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
											name: 'song',
											params: {
												songId: song.id}
											})">
										View
									</v-btn>
								</v-flex>

								<v-flex xs6>
									<img class="album-image" :src="song.albumImageUrl">
								</v-flex>
							</v-layout>
						</div>
			      </panel>
      </div>    
    </v-flex>   
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService  from '@/services/SongsService'	

export default {
	components: {
		Panel
	},

	data () {
		return {
			songs: []
		}
	},

	methods: {
		navigateTo (route) {
			this.$router.push(route)
		}
	},

	async mounted () {
		// do a request to  the backend for all the songs
		this.songs = (await SongsService.index()).data
		// console.log(this.songs)
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


</style>