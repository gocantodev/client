<script setup lang="ts">
	import { media } from "./Type/SocialMedia";
</script>

<template>
	<footer class="border-t border-gray-100 mt-8">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
			<div class="flex justify-center space-x-6 md:order-2">
				<a
					v-for="item in media"
					:key="item.name"
					target="_blank"
					:href="item.url"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">{{ item.name }}</span>
					<span v-html="item.icon"></span>
				</a>
			</div>
			<div class="mt-8 md:mt-0 md:order-1">
				<p class="text-center text-base text-gray-400">
					&copy; 2021 gocanto. All rights reserved.
				</p>
			</div>
		</div>
	</footer>

</template>
