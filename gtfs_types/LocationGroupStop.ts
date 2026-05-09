import { LocationGroup } from './LocationGroup';
import { Stop } from './Stop';

export class LocationGroupStop {
	locationGroup: LocationGroup | string;
	stop: Stop | string;

	constructor(init: GTFSLocationGroupStopObject);
	constructor(init: { locationGroup: LocationGroup | string; stop: Stop | string });
	constructor(init: GTFSLocationGroupStopObject | { locationGroup: LocationGroup | string; stop: Stop | string }) {
		if ("location_group_id" in init) {
			this.locationGroup = init.location_group_id;
			this.stop = init.stop_id;
		} else {
			this.locationGroup = init.locationGroup;
			this.stop = init.stop;
		}
	}

	public toJSON(): GTFSLocationGroupStopObject {
		return {
			location_group_id: typeof this.locationGroup === 'string' ? this.locationGroup : this.locationGroup.id,
			stop_id: typeof this.stop === 'string' ? this.stop : this.stop.id,
		};
	}

	public toString(): string {
		const groupId = typeof this.locationGroup === 'string' ? this.locationGroup : this.locationGroup.id;
		const stopId = typeof this.stop === 'string' ? this.stop : this.stop.id;
		return `${groupId}_${stopId}`;
	}
}

export interface GTFSLocationGroupStopObject {
	location_group_id: string;
	stop_id: string;
}
