<script setup lang="ts">
    import { Experiences } from "@entity/Experiences"
</script>

<template>
    <div>
        <span class="section-title">
            Experience <a id="experience" href="#experience"></a>
        </span>

        <p class="mt-4 text-gray-400 text-md">
			As a full-stack developer, I have experience in a wide range of technologies that serve both front and
			back-end stacks, and have delivered numerous major commercial projects for several industries.
			I have also advised and collaborated with designers, creative teams, product managers and stakeholders
			to shape, scale and optimize products.
		</p>

        <div
            class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
        >
            <div v-for="experience in Experiences" :key="experience.uuid">
                <div class="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            v-for="(path, index) in experience.icon.paths"
                            :key="`child-${index}`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            :d="path"
                        />
                    </svg>
                </div>
                <div class="mt-6">
                    <h3 class="font-medium text-gray-900 text-lg">
                        {{ experience.title }}
                    </h3>
                    <p class="mt-2 text-base text-gray-400">
                        {{ experience.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .icon {
        @apply flex items-center justify-center h-12 w-12 rounded-md bg-gray-100;
    }

    .icon svg {
        @apply h-6 w-6 text-pink-500;
    }
</style>
