<template>
	<panel title="search">
		<v-text-field 
			label="Search by song title, arist, album, or genre" 
			v-model="search"
		></v-text-field>
	</panel>
</template>

<script>
import _ from 'lodash'

export default {
	data () {
		return {
			search: ''
		}
	},

	watch: {
		search: _.debounce (async function (value) {
			const route = {
				name: 'songs'
			}

			if (this.search !== '') {
				route.query = {
					search: this.search
				}
			}

			this.$router.push(route)
		}, 700),

		'$route.query.search': {
			immadiate: true,
			handler (value) {
				this.search = value
			}
		}
	}

}
</script>

<style scoped>
	
</style>