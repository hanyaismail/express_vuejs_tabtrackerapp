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
					:to="{
						name: 'song-edit',
						params: {
							songId: song.id}
						}">
					Edit
				</v-btn>

				<v-btn
					v-if="isUserLoggedIn && !bookmark"
					dark
					class="cyan"
					@click="setAsBookmark">
					Set As Bookmark
				</v-btn>

				<v-btn
					v-if="isUserLoggedIn && bookmark"
					dark
					class="cyan"
					@click="unsetAsBookmark">
					Unset As Bookmark
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
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
	props: [
		'song'
	],

	methods: {
		async setAsBookmark () {
			try {
				console.log('clicked book')
				this.bookmark = (await BookmarksService.post({
					songId: this.song.id
				})).data
				console.log('success bookmark')
				console.log(this.bookmark)	
			} catch (err) {
				console.log(err)
			}
		},

		async unsetAsBookmark () {
			try {
				console.log(`clicked un ${this.bookmark}`)
				await BookmarksService.delete(this.bookmark.id)
				this.bookmark = null
				console.log('success un')	
			} catch (err) {
				console.log(err)
			}
		}
	},

	

	data () {
		return {
			bookmark: null
		}
	},

	computed: {
		...mapState([
			'isUserLoggedIn',
			'user'
		])
	},

	async mounted () {
		if(!this.isUserLoggedIn) {
			console.log('not logged in')
			return
		}

		try { 
			console.log('try this')
			const bookmarks = (await BookmarksService.index({
				songId: this.song.id
			})).data

			if (bookmarks.length) {
				this.bookmark = bookmarks[0]
				console.log('mounted success')
			}
			// console.log('bookmark', bookmark)
		} catch (err) {
			console.log(err)
		}	
	},

	
}
</script>

<style>
</style>