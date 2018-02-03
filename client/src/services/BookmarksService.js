import Api from '@/services/Api'

export default {
	index (bookmark) {
		//from SongMetadata.vue when mounted bookmark = {sondId: this.song.id} when  mounted
		return Api().get('bookmarks', {
			params: bookmark
		})

		console.log(`this is bookmark ${bookmark}`)
		console.log(bookmark) //{songId: 1}
	},

	post (bookmark) {
		//from SongMetadata.vue, bookmark = {sondId: this.song.id} when setAsBookmark pressed
		return Api().post('bookmarks', bookmark)

		console.log(`this is bookmark post ${bookmark}`)
		console.log(bookmark) //{songId: 1}
	},

	delete (bookmarkId) {
		//from SongMetadata.vue, bookmarkId = this.bookmark.id when setAsBookmark pressed
		return Api().delete(`bookmarks/${bookmarkId}`)
	}
}
