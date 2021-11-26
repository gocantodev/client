<script setup lang="ts">
	import Navigation from './component/Navigation/Bar.vue'
	import { Author } from './component/Entity'
	import Experience from './component/Experience.vue'
	import Hero from './component/Hero.vue'
	import Skills from './component/Skills.vue'
	import Open from './component/Open.vue'
	import Footer from './component/Footer.vue'

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

	<section class="bg-gray-900">
		<div class="section-margin">
			<Hero></Hero>
		</div>
		<div class="w-full h-1 nav-bg shadow"></div>
	</section>

	<section class="section-margin">
		<Experience></Experience>
	</section>

	<section class="bg-gray-100">
		<div class="section-margin">
			<Skills></Skills>
		</div>
	</section>

	<section class="section-margin">
		<Open></Open>
	</section>

	<Footer></Footer>
</div>

</template>
