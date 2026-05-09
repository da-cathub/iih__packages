//! Google Transit extension
// @see https://developers.google.com/transit/gtfs/reference

import { VehicleAmenity } from './VehicleAmenity';
import { VehicleCategory } from './VehicleCategory';

export class VehicleCategoryAmenity {
	vehicleCategory: VehicleCategory | string;
	vehicleAmenity: VehicleAmenity | string;

	constructor(init: VehicleCategoryAmenityValues);
	constructor(init: GTFSVehicleCategoryAmenityObject);
	constructor(init: VehicleCategoryAmenityValues | GTFSVehicleCategoryAmenityObject) {
		if ('vehicle_category_id' in init) {
			this.vehicleCategory = init.vehicle_category_id;
			this.vehicleAmenity = init.vehicle_amenity_id;
		} else {
			this.vehicleCategory = init.vehicleCategory;
			this.vehicleAmenity = init.vehicleAmenity;
		}
	}

	public toJSON(): GTFSVehicleCategoryAmenityObject {
		return {
			vehicle_category_id: typeof this.vehicleCategory === 'string' ? this.vehicleCategory : this.vehicleCategory.id,
			vehicle_amenity_id: typeof this.vehicleAmenity === 'string' ? this.vehicleAmenity : this.vehicleAmenity.id
		};
	}

	public toString() {
		const categoryId = typeof this.vehicleCategory === 'string' ? this.vehicleCategory : this.vehicleCategory.id;
		const amenityId = typeof this.vehicleAmenity === 'string' ? this.vehicleAmenity : this.vehicleAmenity.id;
		return `${categoryId}_${amenityId}`;
	}
}

export interface GTFSVehicleCategoryAmenityObject {
	vehicle_category_id: string;
	vehicle_amenity_id: string;
}

export interface VehicleCategoryAmenityValues {
	vehicleCategory: VehicleCategory | string;
	vehicleAmenity: VehicleAmenity | string;
}
