<template>
	<panel title="Lyrics" class="mt-2">
		<textarea
			readonly
			v-model="song.lyrics">
		</textarea>
	</panel>
</template>

<script>

export default {
	components: {
	
	},

	props: [
		'song'
	]
}
</script>

<style scoped>
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