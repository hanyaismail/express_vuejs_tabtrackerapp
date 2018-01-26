<template>
	<panel title="Tab" class="mt-2">
		<textarea
			readonly
			v-model="song.tab">
		</textarea>
	</panel>
</template>

<script>
// import Panel from '@/components/panel'
import Panel from '@/components/Panel'

export default {
	components: {
		Panel
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