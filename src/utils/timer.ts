import * as workerTimers from "worker-timers";

const { setTimeout, clearTimeout } = workerTimers;

export class Timer {
	private expected: number;
	private timeout: number;

	constructor(private callback: Function, private interval: number) {}

	public start() {
		this.expected = Date.now() + this.interval;
		this.timeout = setTimeout(this.round, this.interval);
	}

	public stop() {
		clearTimeout(this.timeout);
	}

	private round = () => {
		this.callback();

		const drift = Date.now() - this.expected;
		this.expected += this.interval;
		this.timeout = setTimeout(this.round, this.interval - drift);
	};
}
