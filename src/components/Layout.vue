<script lang="ts">
	import Header from './Header.vue'
	import Bio from './Bio.vue'
	import { Header as HeaderInfo } from './Types'
	import { defineComponent } from 'vue';

	const HeaderInfo = <HeaderInfo>{
		name: 'Gustavo Ocanto',
		email: 'info@gocanto.dev',
		phoneNumber: '+65 8292 9269',
	}

	export default defineComponent({
		components: {
			Header,
			Bio,
		},
		setup() {
			return {
				HeaderInfo,
			}
		},
	})
</script>

<template>
	<Header :header="HeaderInfo"></Header>

	<div class="max-w-7xl mx-auto">
		<Bio></Bio>
	</div>
</template>
