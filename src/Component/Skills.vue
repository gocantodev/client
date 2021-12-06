<script setup lang="ts">
	import { skills } from "../Entity/SkillsCollection";
	import {onMounted} from "vue";

	onMounted(() => {
		console.log('-->', skills)
	})
</script>

<template>
		<div class="lg:gap-x-8 lg:grid lg:grid-cols-3">
			<div>
				<span class="mt-2 section-title">
					Skills <a href="#skills" id="skills"></a>
				</span>
				<p class="mt-4 text-lg text-gray-500">
					I am a passionate learner and have specialized in PHP, including in-depth use of Laravel and Symfony components, as well as Golang and NodeJS
				</p>
			</div>

			<div class="mt-12 lg:mt-0 lg:col-span-2">
				<dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
					<div class="relative" v-for="skill in skills">
						<dt>
							<!-- Heroicon name: outline/check -->
							<svg class="absolute h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ skill.name }}</p>
						</dt>
						<dd class="mt-2 ml-9 text-base text-gray-500">
							{{ skill.description }}.
						</dd>
					</div>
				</dl>
			</div>
		</div>
</template>
