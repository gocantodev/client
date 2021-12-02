<script setup lang="ts">
	import Navigation from './Component/Navigation/Bar.vue'
	import { Author } from './Component/Entity'
	import Experience from './Component/Experience.vue'
	import Bio from './Component/Bio.vue'
	import Hero from './Component/Hero.vue'
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

		<div class="bg-white bg-gray-900">
			<div class="section-margin">
				<Hero></Hero>
			</div>
		</div>

		<div class="bg-white py-5">
			<div class="section-margin">
				<Bio></Bio>
			</div>
		</div>

		<section class="bg-gray-50 py-5">
			<div class="section-margin">
				<Experience></Experience>
			</div>
		</section>

		<section class="bg-white py5">
			<div class="section-margin">
				<Skills></Skills>
			</div>
		</section>

		<section class="bg-gray-50 py5">
			<div class="section-margin">
				<Open></Open>
			</div>
		</section>

		<div class="nav-bg">
			<div class="section-margin">
				<Footer></Footer>
			</div>
		</div>
	</div>
</template>
