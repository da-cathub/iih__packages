export class Timeframe {
	timeframeGroup: string;
	start?: string;
	end?: string;
	service: string;

	constructor(init: TimeframeValues);
	constructor(init: GTFSTimeframeObject);
	constructor(init: TimeframeValues | GTFSTimeframeObject) {
		if ('timeframe_group_id' in init) {
			this.timeframeGroup = init.timeframe_group_id;
			this.start = init.start_time;
			this.end = init.end_time;
			this.service = init.service_id;
		} else {
			this.timeframeGroup = init.timeframeGroup;
			this.start = init.start;
			this.end = init.end;
			this.service = init.service;
		}
	}

	public toJSON(): GTFSTimeframeObject {
		return {
			timeframe_group_id: this.timeframeGroup,
			start_time: this.start,
			end_time: this.end,
			service_id: this.service
		};
	}

	public toString() {
		return `${this.timeframeGroup}_${this.start}_${this.end}_${this.service}`;
	}
}

export interface GTFSTimeframeObject {
	timeframe_group_id: string;
	start_time?: string;
	end_time?: string;
	service_id: string;
}

export interface TimeframeValues {
	timeframeGroup: string;
	start?: string;
	end?: string;
	service: string;
}
