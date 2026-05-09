//! Google Transit extension
// @see https://developers.google.com/transit/gtfs/reference

export class VehicleAmenity {
	id: string;
	acAvailability?: AmenityAvailability;
	wifiAvailability?: AmenityAvailability;
	toiletAvailability?: AmenityAvailability;
	genderAccessibility?: GenderAccessibility;
	seatType?: SeatType;
	serviceClass?: ServiceClass;
	serviceClassCode?: string;
	seatPlug?: AmenityAvailability;
	rowLayoutSummary?: string;
	rowLegSpace?: RowLegSpace;

	constructor(init: VehicleAmenityValues);
	constructor(init: GTFSVehicleAmenityObject);
	constructor(init: VehicleAmenityValues | GTFSVehicleAmenityObject) {
		if ('vehicle_amenity_id' in init) {
			this.id = init.vehicle_amenity_id;
			this.acAvailability = init.ac_availability;
			this.wifiAvailability = init.wifi_availability;
			this.toiletAvailability = init.toilet_availability;
			this.genderAccessibility = init.gender_accessibility;
			this.seatType = init.seat_type;
			this.serviceClass = init.service_class;
			this.serviceClassCode = init.service_class_code;
			this.seatPlug = init.seat_plug;
			this.rowLayoutSummary = init.row_layout_summary;
			this.rowLegSpace = init.row_leg_space;
		} else {
			this.id = init.id;
			this.acAvailability = init.acAvailability;
			this.wifiAvailability = init.wifiAvailability;
			this.toiletAvailability = init.toiletAvailability;
			this.genderAccessibility = init.genderAccessibility;
			this.seatType = init.seatType;
			this.serviceClass = init.serviceClass;
			this.serviceClassCode = init.serviceClassCode;
			this.seatPlug = init.seatPlug;
			this.rowLayoutSummary = init.rowLayoutSummary;
			this.rowLegSpace = init.rowLegSpace;
		}
	}

	public toJSON(): GTFSVehicleAmenityObject {
		return {
			vehicle_amenity_id: this.id,
			ac_availability: this.acAvailability,
			wifi_availability: this.wifiAvailability,
			toilet_availability: this.toiletAvailability,
			gender_accessibility: this.genderAccessibility,
			seat_type: this.seatType,
			service_class: this.serviceClass,
			service_class_code: this.serviceClassCode,
			seat_plug: this.seatPlug,
			row_layout_summary: this.rowLayoutSummary,
			row_leg_space: this.rowLegSpace
		};
	}

	public toString() {
		return this.id;
	}
}

export enum AmenityAvailability {
	Unknown = 0,
	Available = 1,
	NotAvailable = 2
}

export enum GenderAccessibility {
	Unknown = 0,
	NoRestrictions = 1,
	WomenOnly = 2,
	MenOnly = 3
}

export enum SeatType {
	Seat = 0,
	FixedBed = 1,
	RecliningSet = 2
}

export enum ServiceClass {
	Unknown = 0,
	First = 1,
	Second = 2,
	Third = 3,
	Business = 4,
	PremiumEconomy = 5,
	Economy = 6
}

export enum RowLegSpace {
	Unknown = 0,
	Standard = 1,
	Additional = 2
}

export interface GTFSVehicleAmenityObject {
	vehicle_amenity_id: string;
	ac_availability?: AmenityAvailability;
	wifi_availability?: AmenityAvailability;
	toilet_availability?: AmenityAvailability;
	gender_accessibility?: GenderAccessibility;
	seat_type?: SeatType;
	service_class?: ServiceClass;
	service_class_code?: string;
	seat_plug?: AmenityAvailability;
	row_layout_summary?: string;
	row_leg_space?: RowLegSpace;
}

export interface VehicleAmenityValues {
	id: string;
	acAvailability?: AmenityAvailability;
	wifiAvailability?: AmenityAvailability;
	toiletAvailability?: AmenityAvailability;
	genderAccessibility?: GenderAccessibility;
	seatType?: SeatType;
	serviceClass?: ServiceClass;
	serviceClassCode?: string;
	seatPlug?: AmenityAvailability;
	rowLayoutSummary?: string;
	rowLegSpace?: RowLegSpace;
}
