<script setup lang="ts">
	import Navigation from './Component/Navigation/Bar.vue'
	import { Author } from './Component/Entity'
	import About from './Component/About.vue'
	import { defineComponent } from 'vue';

	const author = <Author>{
		nickname: 'Gus',
		name: 'Gustavo Ocanto',
		email: 'info@gocanto.dev',
		profession: 'Software Engineer',
	}

	defineComponent({
		components: {
			Navigation,
			About,
		},
	})

	defineExpose({
		author: author,
	})
</script>

<template>
	<div class="min-h-full">
		<navigation :author="author"></navigation>

		<div class="py-10">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold leading-tight text-gray-900">
					About
				</h1>
			</div>
			<main>
				<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<!-- Replace with your content -->
					<div class="px-4 py-8 sm:px-0">
						<div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
					</div>
					<!-- /End replace -->
				</div>
			</main>
		</div>
	</div>
</template>
