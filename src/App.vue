<script lang="ts">
import Header from './components/Header.vue'
import About from './components/About.vue'
import Tabs from './components/Tabs.vue'
import Footer from './components/Footer.vue'

import { Author } from './entity'
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		Header,
		About,
		Tabs,
		Footer,
	},
	setup() {
		return {
			author: <Author>{
				name: 'Gustavo Ocanto',
				email: 'info@gocanto.dev',
				nickname: 'Gus',
				phoneNumber: '',
			},
		}
	},
})
</script>

<template>
	<Header :author="author"></Header>

	<section class="max-w-5xl mx-auto">
		<Tabs></Tabs>
	</section>

	<section>
		<About></About>
	</section>

	<Footer></Footer>
</template>
