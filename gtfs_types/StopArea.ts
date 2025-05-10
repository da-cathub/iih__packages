export class StopArea {
	area: string;
	stop: string;

	constructor(init: GTFSStopAreaObject);
	constructor(init: { area: string; stop: string });
	constructor(init: GTFSStopAreaObject | { area: string; stop: string }) {
		if ("area_id" in init) {
			this.area = init.area_id;
			this.stop = init.stop_id;
		} else {
			this.area = init.area;
			this.stop = init.stop;
		}
	}

	public toJSON(): GTFSStopAreaObject {
		return {
			area_id: this.area,
			stop_id: this.stop,
		};
	}

	public toString(): string {
		return `${this.area}_${this.stop}`;
	}
}

export interface GTFSStopAreaObject {
	area_id: string;
	stop_id: string;
}