import { markRaw, reactive, readonly } from 'vue';

import ReactiveClass from '../helpers/SuperClassy';
import NormalClass from '../helpers/NormalClass';

export const state = reactive({
	count: 0,

	r: new ReactiveClass('123'),
	n: new NormalClass(),

	// class w async init
	// nn: await NormalClass.doInit(),
	// nn: NormalClass.doInit(), // dont await it
});
