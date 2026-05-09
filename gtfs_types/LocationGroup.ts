export class LocationGroup {
	id: string;
	name?: string;

	constructor(init: GTFSLocationGroupObject);
	constructor(init: { id: string; name?: string });
	constructor(init: GTFSLocationGroupObject | { id: string; name?: string }) {
		if ("location_group_id" in init) {
			this.id = init.location_group_id;
			this.name = init.location_group_name;
		} else {
			this.id = init.id;
			this.name = init.name;
		}
	}

	public toJSON(): GTFSLocationGroupObject {
		return {
			location_group_id: this.id,
			location_group_name: this.name,
		};
	}

	public toString(): string {
		return this.id;
	}
}

export interface GTFSLocationGroupObject {
	location_group_id: string;
	location_group_name?: string;
}
