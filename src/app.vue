<script setup lang="ts">
	import NavBar from './component/navigation/navBar.vue'
	import Experience from './component/experience.vue'
	import Hero from './component/hero.vue'
	import Skills from './component/skills.vue'
	import Open from './component/openSource.vue'
	import Footer from './component/footer.vue'

	import { Author } from './entity/Author'
</script>

<template>
	<div class="min-h-full">

		<NavBar :author="Author"></NavBar>

		<div class="bg-white bg-gray-900">
			<div class="section-margin">
				<Hero :author="Author"></Hero>
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

		<div class="section-margin">
			<Footer :author="Author"></Footer>
		</div>

	</div>
</template>
