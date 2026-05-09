export class Shape {
	id: string;
	latitude: number;
	longitude: number;
	sequence: number;
	distance?: number;

	constructor(init: GTFSShapeObject);
	constructor(init: { id: string; latitude: number; longitude: number; sequence: number; distance?: number });
	constructor(init: GTFSShapeObject | { id: string; latitude: number; longitude: number; sequence: number; distance?: number }) {
		if ("shape_id" in init) {
			this.id = init.shape_id;
			this.latitude = init.shape_pt_lat;
			this.longitude = init.shape_pt_lon;
			this.sequence = init.shape_pt_sequence;
			this.distance = init.shape_dist_traveled;
		} else {
			this.id = init.id;
			this.latitude = init.latitude;
			this.longitude = init.longitude;
			this.sequence = init.sequence;
			this.distance = init.distance;
		}
	}

	public toJSON(): GTFSShapeObject {
		return {
			shape_id: this.id,
			shape_pt_lat: this.latitude,
			shape_pt_lon: this.longitude,
			shape_pt_sequence: this.sequence,
			shape_dist_traveled: this.distance,
		};
	}

	public toString(): string {
		return `Shape ${this.id} (${this.latitude}, ${this.longitude} - ${this.sequence})`;
	}
}

export interface GTFSShapeObject {
	shape_id: string;
	shape_pt_lat: number;
	shape_pt_lon: number;
	shape_pt_sequence: number;
	shape_dist_traveled?: number;
}