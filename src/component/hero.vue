<script setup lang="ts">
    import { Profile } from "@contract/Profile"
    import { PropType } from "vue"

    defineProps({
        author: {
            type: Object as PropType<Profile>,
            required: true,
        },
    })
</script>

<template>
    <div class="relative bg-gray-900">
        <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div class="h-full w-full xl:grid xl:grid-cols-2">
                <div class="h-full xl:relative xl:col-start-2">
                    <img
                        class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                        src="/images/profile-pic.jpg"
                        alt="People working on laptops"
                    />
                    <div
                        aria-hidden="true"
                        class="absolute bg-gradient-to-b from-gray-900 h-32 top-0 xl:bg-gradient-to-l xl:h-full xl:inset-y-0 xl:right-0 xl:w-32"
                    ></div>
                    <div
                        aria-hidden="true"
                        class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                    ></div>
                </div>
            </div>
        </div>
        <div
            class="lg:max-w-7xl max-w-4xl mx-auto xl:gap-x-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense"
        >
            <div
                class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24"
            >
                <h2 class="text-sm font-semibold tracking-wide uppercase">
                    <span class="text-yellow-500"
                        >Hi, I am {{ author.nickname }}!</span
                    >
                </h2>
                <p class="mt-5 text-lg text-gray-300">
                    I'm a full-stack {{ author.profession }} who has been
                    building web technologies for more than a decade.
                </p>
                <p class="mt-5 text-lg text-gray-300">
                    I like to work in environments where my critical and
                    analytical thinking, entrepreneurial mindset, and passion
                    for my work will contribute to a team.
                </p>
                <div
                    class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2"
                >
                    <p>
                        <span class="block text-2xl font-bold text-white"
                            >8K+</span
                        >
                        <span class="mt-1 block text-base text-gray-300"
                            ><span class="font-medium text-white"
                                >Companies</span
                            >
                            use laoreet amet lacus nibh integer quis.</span
                        >
                    </p>

                    <p>
                        <span class="block text-2xl font-bold text-white"
                            >25K+</span
                        >
                        <span class="mt-1 block text-base text-gray-300"
                            ><span class="font-medium text-white"
                                >Countries around the globe</span
                            >
                            lacus nibh integer quis.</span
                        >
                    </p>

                    <p>
                        <span class="block text-2xl font-bold text-white"
                            >98%</span
                        >
                        <span class="mt-1 block text-base text-gray-300"
                            ><span class="font-medium text-white"
                                >Customer satisfaction</span
                            >
                            laoreet amet lacus nibh integer quis.</span
                        >
                    </p>

                    <p>
                        <span class="block text-2xl font-bold text-white"
                            >12M+</span
                        >
                        <span class="mt-1 block text-base text-gray-300"
                            ><span class="font-medium text-white"
                                >Issues resolved</span
                            >
                            lacus nibh integer quis.</span
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
