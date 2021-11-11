<script setup lang="ts">
	import Navigation from './Component/Navigation/Bar.vue'
	import { Author } from './Component/Entity'
	import About from './Component/About.vue'
	import Bio from './Component/Bio.vue'

	const author = <Author>{
		nickname: 'Gus',
		name: 'Gustavo Ocanto',
		email: 'info@gocanto.dev',
		profession: 'Software Engineer',
	}

	defineExpose({
		author: author,
	})
</script>

<template>
	<div class="min-h-full">
		<Navigation :author="author"></Navigation>

		<div class="section-margin py-4 px-4 sm:px-6 lg:px-8">
			<Bio></Bio>
		</div>

		<About></About>
	</div>
</template>

<style>
.section-margin {
	@apply max-w-7xl mx-auto
}
</style>
