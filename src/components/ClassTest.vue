<template>
	<div style="display: flex; flex-direction: column">
		<p>
			ClassTest
		</p>
		<p>
			{{ bewm }}
		</p>

		<p>
			{{ $state.n.val1 }}
		</p>

		<button @click="changeSomething">
			changeSomething
		</button>

		<button @click="callSomething">
			callSomething
		</button>

		<button @click="callSomethingThatChangesSomething">
			callSomethingThatChangesSomething
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';

import { state } from '../state';

export default defineComponent({
	data() {
		return {
			bewm: 'skeet',

			state,
		}
	},
	mounted() {
		console.log('mounted');
		this.initWatchers();
	},
	methods: {
		initWatchers() {

			watch(
				() => state.n,
				(n) => {
					console.log('n changed:', n);
				},
				{
					immediate: true,
					deep: true, // essential
				}
			);

			// watch(
			// 	() => state.nn,
			// 	(nn) => {
			// 		console.log('nn changed:', nn);
			// 	},
			// 	{
			// 		immediate: true,
			// 		deep: true, // essential
			// 	}
			// );
		},
		changeSomething() {
			console.log('changeSomething');
			state.n.val1 = 'it changed!'; // notice, WITHOUT calling a class method
		},
		callSomething() {
			console.log('callSomething');
			state.n.sayHi();
		},
		callSomethingThatChangesSomething() {
			console.log('callSomethingThatChangesSomething');
			state.n.updateVal('we changed again!');
		}
	}
});
</script>

<style scoped>
p {
	color: palevioletred;
}
</style>
