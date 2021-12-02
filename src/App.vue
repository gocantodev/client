<script setup lang="ts">
	import Navigation from './Component/Navigation/Bar.vue'
	import { Author } from './Component/Entity'
	import Experience from './Component/Experience.vue'
	import Hero from './Component/Hero.vue'
	import Skills from './Component/Skills.vue'
	import Open from './Component/OpenSource.vue'
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

		<div class="divider"></div>

		<section class="py-14 section-margin">
			<Experience></Experience>
		</section>

		<section class="bg-gray-50">
			<div class="section-margin py-14">
				<Skills></Skills>
			</div>
		</section>

		<section class="section-margin py-14">
			<Open></Open>
		</section>

		<div class="nav-bg">
			<div class="section-margin">
				<Footer></Footer>
			</div>
		</div>
	</div>
</template>
