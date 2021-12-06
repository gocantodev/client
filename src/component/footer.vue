<script setup lang="ts">
	import { Networks } from "../entity/SocialMedia";

	import { Profile } from "../contract/Profile";
	import { PropType } from 'vue';

	defineProps({
		author: {
			type: Object as PropType<Profile>,
			required: true,
		}
	})
</script>

<template>
	<section class="border-t border-gray-100 mt-8">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
			<div class="flex justify-center space-x-6 md:order-2">
				<a
					v-for="media in Networks"
					:key="media.name"
					:title="media.name"
					target="_blank"
					:href="media.url"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">{{ media.name }}</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							v-for="path in media.icon.paths"
							fill-rule="evenodd"
							:d="path"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
			<div class="mt-8 md:mt-0 md:order-1">
				<p class="text-center text-base text-gray-400">
					&copy; 2021 {{ author.handle }}. All rights reserved.
				</p>
			</div>
		</div>
	</section>

</template>
