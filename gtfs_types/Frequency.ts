import { BooleanyValue } from "./_Universal";

export class Frequency {
	trip: string;
	startTime: string;
	endTime: string;
	headwaySecs: number;
	exactTimes?: boolean;

	constructor(init: GTFSFrequencyObject);
	constructor(init: FrequencyValues);
	constructor(init: GTFSFrequencyObject | FrequencyValues) {
		if ("trip_id" in init) {
			this.trip = init.trip_id;
			this.startTime = init.start_time;
			this.endTime = init.end_time;
			this.headwaySecs = init.headway_secs;
			this.exactTimes = init.exact_times ? Boolean(init.exact_times) : undefined;
		} else {
			this.trip = init.trip;
			this.startTime = init.startTime;
			this.endTime = init.endTime;
			this.headwaySecs = init.headwaySecs;
			this.exactTimes = init.exactTimes ? Boolean(init.exactTimes) : undefined;
		}
	}
	public toJSON(): GTFSFrequencyObject {
		return {
			trip_id: this.trip,
			start_time: this.startTime,
			end_time: this.endTime,
			headway_secs: this.headwaySecs,
			exact_times: this.exactTimes ? 1 : 0,
		};
	}
	public toString(): string {
		return `Frequency ${this.trip} (${this.startTime} - ${this.endTime})`;
	}
}

export interface FrequencyValues {
	trip: string;
	startTime: string;
	endTime: string;
	headwaySecs: number;
	exactTimes?: boolean | BooleanyValue;
}

export interface GTFSFrequencyObject {
	trip_id: string;
	start_time: string;
	end_time: string;
	headway_secs: number;
	exact_times?: BooleanyValue;
}