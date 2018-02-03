<template>
	<v-layout>
		<v-flex xs6 v-if="isUserLoggedIn">
			<SongBookmarks />
			<RecentlyViewedSong class="mt-2" />
		</v-flex>

		<v-flex xs6 :class="{ xs6: isUserLoggedIn, xs12: !isUserLoggedIn }" class="ml-2">
			<SongsSearchPanel />
			<SongsPanel class="mt-2" />
    	</v-flex>   
  	</v-layout>
</template>

<script>
import SongsService  from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongBookmarks from './SongBookmarks'
import RecentlyViewedSong from './RecentlyViewedSong'
import {mapState} from 'vuex'	

export default {
	components: {
		SongsPanel,
		SongsSearchPanel,
		SongBookmarks,
		RecentlyViewedSong
	},

	computed: {
		...mapState ([
			'isUserLoggedIn'	
		])
	}	
}
</script>

<style scoped>
</style>