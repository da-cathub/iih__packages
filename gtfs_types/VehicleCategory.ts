//! Google Transit extension
// @see https://developers.google.com/transit/gtfs/reference

import { VehicleAmenity } from './VehicleAmenity';

export class VehicleCategory {
	id: string;
	vehicleAmenity?: VehicleAmenity | string;

	constructor(init: VehicleCategoryValues);
	constructor(init: GTFSVehicleCategoryObject);
	constructor(init: VehicleCategoryValues | GTFSVehicleCategoryObject) {
		if ('vehicle_category_id' in init) {
			this.id = init.vehicle_category_id;
			this.vehicleAmenity = init.vehicle_amenity_id;
		} else {
			this.id = init.id;
			this.vehicleAmenity = init.vehicleAmenity;
		}
	}

	public toJSON(): GTFSVehicleCategoryObject {
		return {
			vehicle_category_id: this.id,
			vehicle_amenity_id: typeof this.vehicleAmenity === 'string' ? this.vehicleAmenity : this.vehicleAmenity?.id
		};
	}

	public toString() {
		return this.id;
	}
}

export interface GTFSVehicleCategoryObject {
	vehicle_category_id: string;
	vehicle_amenity_id?: string;
}

export interface VehicleCategoryValues {
	id: string;
	vehicleAmenity?: VehicleAmenity | string;
}
