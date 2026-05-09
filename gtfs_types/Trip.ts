export class Trip {
	id: string;
	service: string;
	route: string;
	headsign?: string;
	shortName?: string;
	direction?: TripDirection;
	block?: string;
	shape?: string;
	wheelchairAccessible?: TripWheelchairAccessibility;
	bikesAllowed?: TripBikesAllowed;
	carsAllowed?: TripCarsAllowed;
	safeDurationFactor?: number;
	safeDurationOffset?: number;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	exceptional?: TripExceptional;
	originalTripId?: string;
	ticketingTripId?: string;
	ticketingType?: TripTicketingType;
	tripDirectionName?: string;
	vehicleCategoryId?: string;

	constructor(init: TripValues);
	constructor(init: GTFSTripObject);
	constructor(init: TripValues | GTFSTripObject) {
		if ('trip_id' in init) {
			this.id = init.trip_id;
			this.service = init.service_id;
			this.route = init.route_id;
			this.headsign = init.trip_headsign;
			this.shortName = init.trip_short_name;
			this.direction = init.direction_id;
			this.block = init.block_id;
			this.shape = init.shape_id;
			this.wheelchairAccessible = init.wheelchair_accessible;
			this.bikesAllowed = init.bikes_allowed;
			this.carsAllowed = init.cars_allowed;
			this.safeDurationFactor = init.safe_duration_factor;
			this.safeDurationOffset = init.safe_duration_offset;
			this.exceptional = init.exceptional;
			this.originalTripId = init.original_trip_id;
			this.ticketingTripId = init.ticketing_trip_id;
			this.ticketingType = init.ticketing_type;
			this.tripDirectionName = init.trip_direction_name;
			this.vehicleCategoryId = init.vehicle_category_id;
		} else {
			this.id = init.id;
			this.service = init.service;
			this.route = init.route;
			this.headsign = init.headsign;
			this.shortName = init.shortName;
			this.direction = init.direction;
			this.block = init.block;
			this.shape = init.shape;
			this.wheelchairAccessible = init.wheelchairAccessible;
			this.bikesAllowed = init.bikesAllowed;
			this.carsAllowed = init.carsAllowed;
			this.safeDurationFactor = init.safeDurationFactor;
			this.safeDurationOffset = init.safeDurationOffset;
			this.exceptional = init.exceptional;
			this.originalTripId = init.originalTripId;
			this.ticketingTripId = init.ticketingTripId;
			this.ticketingType = init.ticketingType;
			this.tripDirectionName = init.tripDirectionName;
			this.vehicleCategoryId = init.vehicleCategoryId;
		}
	}

	public toJSON(): GTFSTripObject {
		return {
			route_id: this.route,
			service_id: this.service,
			trip_id: this.id,
			trip_headsign: this.headsign,
			trip_short_name: this.shortName,
			direction_id: this.direction,
			block_id: this.block,
			shape_id: this.shape,
			wheelchair_accessible: this.wheelchairAccessible,
			bikes_allowed: this.bikesAllowed,
			cars_allowed: this.carsAllowed,
			safe_duration_factor: this.safeDurationFactor,
			safe_duration_offset: this.safeDurationOffset,
			exceptional: this.exceptional,
			original_trip_id: this.originalTripId,
			ticketing_trip_id: this.ticketingTripId,
			ticketing_type: this.ticketingType,
			trip_direction_name: this.tripDirectionName,
			vehicle_category_id: this.vehicleCategoryId
		};
	}

	public toString() {
		return this.id;
	}
}

export enum TripDirection {
	Outbound = 0,
	Inbound = 1
}

export enum TripWheelchairAccessibility {
	NoInformation = 0,
	Some = 1,
	NotAllowed = 2
}

export enum TripBikesAllowed {
	NoInformation = 0,
	Allowed = 1,
	NotAllowed = 2
}

export enum TripCarsAllowed {
	NoInformation = 0,
	Allowed = 1,
	NotAllowed = 2
}

//! Google Transit-supported extensions in static feeds
// @see https://developers.google.com/transit/gtfs/reference
export enum TripExceptional {
	Regular = 0,
	Exception = 1
}

export enum TripTicketingType {
	Available = 0,
	Unavailable = 1
}

export interface GTFSTripObject {
	route_id: string;
	service_id: string;
	trip_id: string;
	trip_headsign?: string;
	trip_short_name?: string;
	direction_id?: TripDirection;
	block_id?: string;
	shape_id?: string;
	wheelchair_accessible?: TripWheelchairAccessibility;
	bikes_allowed?: TripBikesAllowed;
	cars_allowed?: TripCarsAllowed;
	safe_duration_factor?: number;
	safe_duration_offset?: number;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	exceptional?: TripExceptional;
	original_trip_id?: string;
	ticketing_trip_id?: string;
	ticketing_type?: TripTicketingType;
	trip_direction_name?: string;
	vehicle_category_id?: string;
}

export interface TripValues {
	id: string;
	service: string;
	route: string;
	headsign?: string;
	shortName?: string;
	direction?: TripDirection;
	block?: string;
	shape?: string;
	wheelchairAccessible?: TripWheelchairAccessibility;
	bikesAllowed?: TripBikesAllowed;
	carsAllowed?: TripCarsAllowed;
	safeDurationFactor?: number;
	safeDurationOffset?: number;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	exceptional?: TripExceptional;
	originalTripId?: string;
	ticketingTripId?: string;
	ticketingType?: TripTicketingType;
	tripDirectionName?: string;
	vehicleCategoryId?: string;
}
