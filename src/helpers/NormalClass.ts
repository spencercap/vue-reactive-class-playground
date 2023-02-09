
export class NormalClass {
	val1 = 'initial val';
	inited = false;

	constructor(args?: any) {
		console.log('NormalClass constructed', args);

		if (args?.initVal) {
			this.inited = args.initVal;
		}
	}

	sayHi(): void {
		console.log('sayHi');
	}

	updateVal(str: string): void {
		this.val1 = str;
	}

	// this is how to make async class inits. the key is "static"
	static async doInit() {
		console.log('doInit');

		let delayMs = 1400; // ms
		const somePromise = (ms: number) => new Promise(r => setTimeout(r, ms));
		await somePromise(delayMs);

		// return self
		return new NormalClass({ initVal: true });
	}

}

export default NormalClass;