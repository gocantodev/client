<script setup lang="ts">
	import { Menu, CONTACT_ME_SLUG } from "./Menu"
	import { PropType, ref } from 'vue';
	import { Profile } from "../../contract/Profile";

	const props = defineProps({
		author: {
			type: Object as PropType<Profile>,
			required: true,
		}
	})

	const current = ref('')
	const isOpen = ref(false)

	const toggleMenu = (): void => {
		isOpen.value = !isOpen.value
	}

	const getItemClassFor = (page:string, isMobile:boolean = false): string => {
		const prefix = isMobile ? 'mobile-' : ''

		if (page === current.value) {
			return `${prefix}menu-item-active`
		}

		return `${prefix}menu-item`
	}

	const reset = () => {
		window.location.href = '/'
	}

	const goTo = (slug:string): void => {
		current.value = slug

		window.location.href = slug === CONTACT_ME_SLUG
			? `mailto:${props.author.email}`
			: `#${slug}`
	}
</script>

<template>
	<nav class="nav-bg">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<button type="button" @click="toggleMenu()" class="mobile-menu-button" aria-controls="mobile-menu" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
					<div @click="reset" title="refresh" class="cursor-pointer flex-shrink-0 flex items-center text-white">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 hidden w-8 md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
						</svg>
						<div class="md:hidden tracking-wide">GOCANTO</div>
					</div>
					<div class="hidden sm:block sm:ml-6">
						<div class="flex space-x-4">
							<a
								v-for="item in Menu"
								:href="`#${item.slug}`"
								:key="item.slug"
								:class="getItemClassFor(item.slug)"
								@click.prevent="goTo(item.slug)"
							>
								{{ item.label }}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="sm:hidden bg-white" id="mobile-menu" v-if="isOpen">
			<div class="pt-2 pb-3 space-y-1">
				<a
					v-for="item in Menu"
					:href="`#${item.slug}`"
					:key="item.slug"
					:class="getItemClassFor(item.slug, true)"
					@click.prevent="goTo(item.slug)"
				>
					{{ item.label }}
				</a>
			</div>
		</div>
	</nav>

</template>

<style scoped>
.menu-item {
	@apply text-pink-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10
}

.menu-item-active {
	@apply text-pink-100 text-sm font-medium rounded-md bg-white px-3 py-2 bg-opacity-10
}

.mobile-menu-item {
	@apply border-transparent text-pink-500 hover:bg-gray-50 block pl-3 pr-4 py-2 border-l-4 text-base
}

.mobile-menu-item-active {
	@apply bg-gray-50 border-pink-500 text-pink-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium
}

.mobile-menu-button {
	@apply bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:opacity-70 inline-flex items-center justify-center opacity-50 p-2 rounded-md text-gray-500
}
</style>
