<script setup lang="ts">
	import Menu from "./Menu"
	import { PropType, ref } from 'vue';
	import { Author } from "../Entity";

	defineProps({
		author: {
			type: Object as PropType<Author>,
			required: true,
		}
	})

	const isOpen = ref(false)
	const current = ref('about')

	const toggleMenu = (): void => {
		isOpen.value = !isOpen.value
	}

	const setCurrent = (page:string): void => {
		current.value = page
	}

	const getItemClassFor = (page:string, isMobile:boolean = false): string => {
		const prefix = isMobile ? 'mobile-' : ''

		if (page === current.value) {
			return `${prefix}menu-item-active`
		}

		return `${prefix}menu-item`
	}
</script>

<template>
	<nav class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 shadow">
		<div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
			<div class="flex items-center">
				<img class="h-12 w-auto rounded-full ring-2 ring-white" src="../../assets/avatar.jpg" :alt="author.nickname">
				<div class="flex items-center ml-5 flex-col items-stretch">
					<div class="flex items-baseline text-lg font-medium text-white">
						<span>{{ author.name }}</span>
						<small class="font-normal text-xs ml-2">(He/Him)</small>
					</div>
					<div class="text-xs text-white">{{ author.profession }}</div>
				</div>
			</div>
			<nav class="hidden md:block">
				<a
					v-for="item in Menu"
					:href="`#${item.option}`"
					:key="item.option"
					:class="getItemClassFor(item.option)"
					@click.prevent="setCurrent(item.option)"
				>
					{{ item.label }}
				</a>
			</nav>
			<div class="-mr-2 flex items-center sm:hidden">
				<button @click="toggleMenu()" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">
					<span class="sr-only">Open menu</span>
					<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</nav>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu" v-if="isOpen">
		<div class="pt-2 pb-3 space-y-1">
			<a
				v-for="item in Menu"
				:href="`#${item.option}`"
				:key="item.option"
				:class="getItemClassFor(item.option, true)"
				@click.prevent="setCurrent(item.option)"
			>
				{{ item.label }}
			</a>
		</div>
	</div>
</template>

<style>
.menu-item {
	@apply text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10
}

.menu-item-active {
	@apply text-indigo-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 bg-opacity-10
}

.mobile-menu-item {
	@apply border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium
}

.mobile-menu-item-active {
	@apply bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium
}
</style>
