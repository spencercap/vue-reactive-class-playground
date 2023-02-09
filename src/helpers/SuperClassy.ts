import { markRaw, reactive, readonly } from 'vue';

//
const state = reactive({
	count: 0
});

export class ReactiveClass {
	id: string; // unique for each class inst
	// inited = false;

	state = state;

	constructor(args: any) {
		console.log('ReactiveClass constructed', args.id);

		this.id = args.id;

		this.state.count++;
	}

	incCount(): void {
		console.log('incCount');
		this.state.count++;
	}
}

export default ReactiveClass;