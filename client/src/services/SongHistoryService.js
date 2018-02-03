import Api from '@/services/Api'

export default {
	index () {
		// console.log(`history ${params}`)
		// when RecentlyViewedSong mounted
		return Api().get('histories', {
		})
	},

	post (history) {
		//history = songId = route.params.songId -> ViewSong Index
		return Api().post('histories', history)

		console.log('from history')
		console.log(history) //{songId: n, userId: n}
	}
}
