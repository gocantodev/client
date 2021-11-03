<script lang="ts">
	import {defineComponent} from "vue";
	import SectionHeading from "./SectionHeading.vue";

	export default defineComponent({
		components: {
			SectionHeading,
		},
	})
</script>

<template>

	<div class="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
		<div class="max-w-max lg:max-w-5xl mx-auto">
<!--			<section-heading></section-heading>-->
			<div class="relative">
<!--				<svg class="hidden md:block absolute top-0 right-0 -mr-20 mt-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">-->
<!--					<defs>-->
<!--						<pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">-->
<!--							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />-->
<!--						</pattern>-->
<!--					</defs>-->
<!--					<rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />-->
<!--				</svg>-->
				<svg class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
					<defs>
						<pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
				</svg>
				<div class="relative md:bg-white md:p-6">
					<h1 class="text-2xl leading-6 font-medium text-gray-900 mb-5">
						About
					</h1>
<!--					<div class="lg:grid lg:grid-cols-2 lg:gap-6">-->
						<div class="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
							<p>I am a focused software developer and have been working in the field for more than ten years. I am a passionate learner and have recently specialized in PHP, including in-depth use of Laravel and Symfony components, as well as Golang and NodeJS. I thrive in work environments where my critical and analytical thinking, entrepreneurial mindset, and passion for my work will contribute to the team and challenge me daily.</p>
							<p>
								As a full-stack developer, I am experienced in a wide range of technologies and am comfortable taking responsibility for major commercial projects. I have also been recognized for giving input to UI/UX projects and have a high level of proficiency in JavaScript, using Vue.js combined with a variety of CSS frameworks like Less, Sass, Tailwind CSS and, vanilla CSS.
							</p>
						</div>
<!--					</div>-->
				</div>
			</div>
		</div>
	</div>
</template>
