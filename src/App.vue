<script setup lang="ts">
	import Navigation from './Component/Navigation/Bar.vue'
	import { Author } from './Component/Entity'
	import Experience from './Component/Experience.vue'
	import Bio from './Component/Bio.vue'
	import Skills from './Component/Skills.vue'
	import Open from './Component/Open.vue'
	import Footer from './Component/Footer.vue'

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

		<div class="pt-8 section-margin">
			<Bio></Bio>
		</div>

		<div class="bg-purple-600 mt-10 pb-10">
			<div class="section-margin">
				<Experience></Experience>
			</div>
		</div>

		<div class="section-margin">
			<Skills></Skills>
		</div>

		<div class="bg-purple-600 mt-10 pb-10">
			<div class="section-margin">
				<Open></Open>
			</div>
		</div>

		<div class="section-margin">
			<Footer></Footer>
		</div>
	</div>
</template>
