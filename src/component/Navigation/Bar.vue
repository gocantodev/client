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
	<nav class="nav-bg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="hidden sm:flex sm:items-center">


          <div class="relative">

			<button type="button" @click="toggleMenu" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 opacity-50" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
				<span class="sr-only" @click="toggleMenu">Open menu</span>
				<div class="bg-white flex items-center p-2 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-purple-500 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
					</svg>
				</div>
			</button>

            <div v-if="isOpen" class="z-50 origin-top-right absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-0">
                Your Profile
              </a>

              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">
                Settings
              </a>

              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-2">
                Sign out
              </a>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
			<button type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-full opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600" aria-controls="mobile-menu" aria-expanded="false">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-purple-500 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</button>
        </div>
      </div>
    </div>
  </nav>
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
