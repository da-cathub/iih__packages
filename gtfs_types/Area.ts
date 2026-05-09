export class Area {
	id: string;
	name?: string;

	constructor(init: AreaValues);
	constructor(init: GTFSAreaObject);
	constructor(init: AreaValues | GTFSAreaObject) {
		if ('area_id' in init) {
			this.id = init.area_id;
			this.name = init.area_name;
		} else {
			this.id = init.id;
			this.name = init.name;
		}
	}

	public toJSON(): GTFSAreaObject {
		return {
			area_id: this.id,
			area_name: this.name
		};
	}

	public toString() {
		return this.id;
	}
}

export interface GTFSAreaObject {
	area_id: string;
	area_name?: string;
}

export interface AreaValues {
	id: string;
	name?: string;
}
