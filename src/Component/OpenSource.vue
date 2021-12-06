<script setup lang="ts">
	import { Projects } from "../Entity/OpenSourceCollection";
</script>

<template>
	<div class="relative">
		<div class="mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl">
			<span class="mt-2 section-title">
				Open Source Projects <a href="#open-source" id="open-source"></a>
			</span>

			<p class="mt-5 max-w-prose mx-auto text-gray-400 text-md">
				I actively maintain many PHP, JavaScript & GO repositories and have contributed to many others, such as Laravel.
			</p>

			<div class="mt-12">
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div class="pt-6" v-for="project in Projects">
						<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
							<div class="-mt-6">
								<div>
									<span class="inline-flex items-center justify-center p-3 bg-pink-500 rounded-md shadow-lg">
									  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path
											v-for="path in project.icon.paths"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											:d="path"
										/>
									  </svg>
									</span>
								</div>
								<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
									<a :href="project.url" target="_blank" title="go to repository">{{ project.name }}</a>
								</h3>
								<p class="mt-5 text-base text-gray-500">
									{{ project.description }}.
								</p>
								<p class="mt-5 text-base text-gray-500">
									({{ project.technology }})
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>
