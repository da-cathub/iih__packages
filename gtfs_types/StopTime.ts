import { BookingRule } from './BookingRule';

export class StopTime {
	trip: string;
	arrival?: string;
	departure?: string;
	stop?: string;
	locationGroup?: string;
	location?: string;
	stopSequence: number;
	headsign?: string;
	startPickupDropOffWindow?: string;
	endPickupDropOffWindow?: string;
	pickUp?: StopTimePickDrop;
	dropOff?: StopTimePickDrop;
	continuousPickUp?: StopTimeContinuous;
	continuousDropOff?: StopTimeContinuous;
	shapeDistanceTraveled?: number;
	timepoint?: Timepoint;
	pickupBookingRule?: BookingRule | string;
	dropOffBookingRule?: BookingRule | string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	stopDirectionName?: string;
	ticketingStopTimeId?: string;
	ticketingType?: StopTimeTicketingType;

	constructor(init: StopTimeValues);
	constructor(init: GTFSStopTimeObject);
	constructor(init: StopTimeValues | GTFSStopTimeObject) {
		if ('trip_id' in init) {
			this.trip = init.trip_id;
			this.arrival = init.arrival_time;
			this.departure = init.departure_time;
			this.stop = init.stop_id;
			this.locationGroup = init.location_group_id;
			this.location = init.location_id;
			this.stopSequence = init.stop_sequence;
			this.headsign = init.stop_headsign;
			this.startPickupDropOffWindow = init.start_pickup_drop_off_window;
			this.endPickupDropOffWindow = init.end_pickup_drop_off_window;
			this.pickUp = init.pickup_type;
			this.dropOff = init.drop_off_type;
			this.continuousPickUp = init.continuous_pickup;
			this.continuousDropOff = init.continuous_drop_off;
			this.shapeDistanceTraveled = init.shape_dist_traveled;
			this.timepoint = init.timepoint;
			this.pickupBookingRule = init.pickup_booking_rule_id;
			this.dropOffBookingRule = init.drop_off_booking_rule_id;
			this.stopDirectionName = init.stop_direction_name;
			this.ticketingStopTimeId = init.ticketing_stop_time_id;
			this.ticketingType = init.ticketing_type;
		} else {
			this.trip = init.trip;
			this.arrival = init.arrival;
			this.departure = init.departure;
			this.stop = init.stop;
			this.locationGroup = init.locationGroup;
			this.location = init.location;
			this.stopSequence = init.stopSequence;
			this.headsign = init.headsign;
			this.startPickupDropOffWindow = init.startPickupDropOffWindow;
			this.endPickupDropOffWindow = init.endPickupDropOffWindow;
			this.pickUp = init.pickUp;
			this.dropOff = init.dropOff;
			this.continuousPickUp = init.continuousPickUp;
			this.continuousDropOff = init.continuousDropOff;
			this.shapeDistanceTraveled = init.shapeDistanceTraveled;
			this.timepoint = init.timepoint;
			this.pickupBookingRule = init.pickupBookingRule;
			this.dropOffBookingRule = init.dropOffBookingRule;
			this.stopDirectionName = init.stopDirectionName;
			this.ticketingStopTimeId = init.ticketingStopTimeId;
			this.ticketingType = init.ticketingType;
		}
	}

	public toJSON(): GTFSStopTimeObject {
		return {
			trip_id: this.trip,
			arrival_time: this.arrival,
			departure_time: this.departure,
			stop_id: this.stop,
			location_group_id: this.locationGroup,
			location_id: this.location,
			stop_sequence: this.stopSequence,
			stop_headsign: this.headsign,
			start_pickup_drop_off_window: this.startPickupDropOffWindow,
			end_pickup_drop_off_window: this.endPickupDropOffWindow,
			pickup_type: this.pickUp,
			drop_off_type: this.dropOff,
			continuous_pickup: this.continuousPickUp,
			continuous_drop_off: this.continuousDropOff,
			shape_dist_traveled: this.shapeDistanceTraveled,
			timepoint: this.timepoint,
			pickup_booking_rule_id: typeof this.pickupBookingRule === 'string' ? this.pickupBookingRule : this.pickupBookingRule?.id,
			drop_off_booking_rule_id: typeof this.dropOffBookingRule === 'string' ? this.dropOffBookingRule : this.dropOffBookingRule?.id,
			stop_direction_name: this.stopDirectionName,
			ticketing_stop_time_id: this.ticketingStopTimeId,
			ticketing_type: this.ticketingType
		};
	}

	public toString() {
		return `${this.trip}_${this.stopSequence}`;
	}
}

export enum StopTimePickDrop {
	Regular = 0,
	NoStop = 1,
	PhoneAgency = 2,
	CoordinateDriver = 3
}

export enum StopTimeContinuous {
	Continuous = 0,
	NoContinuous = 1,
	PhoneAgency = 2,
	DriverArrangement = 3
}

export enum Timepoint {
	Approximate = 0,
	Exact = 1
}

//! Google Transit-supported extensions in static feeds
// @see https://developers.google.com/transit/gtfs/reference
export enum StopTimeTicketingType {
	Available = 0,
	Unavailable = 1
}

export interface GTFSStopTimeObject {
	trip_id: string;
	arrival_time?: string;
	departure_time?: string;
	stop_id?: string;
	location_group_id?: string;
	location_id?: string;
	stop_sequence: number;
	stop_headsign?: string;
	start_pickup_drop_off_window?: string;
	end_pickup_drop_off_window?: string;
	pickup_type?: StopTimePickDrop;
	drop_off_type?: StopTimePickDrop;
	continuous_pickup?: StopTimeContinuous;
	continuous_drop_off?: StopTimeContinuous;
	shape_dist_traveled?: number;
	timepoint?: Timepoint;
	pickup_booking_rule_id?: string;
	drop_off_booking_rule_id?: string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	stop_direction_name?: string;
	ticketing_stop_time_id?: string;
	ticketing_type?: StopTimeTicketingType;
}

export interface StopTimeValues {
	trip: string;
	arrival?: string;
	departure?: string;
	stop?: string;
	locationGroup?: string;
	location?: string;
	stopSequence: number;
	headsign?: string;
	startPickupDropOffWindow?: string;
	endPickupDropOffWindow?: string;
	pickUp?: StopTimePickDrop;
	dropOff?: StopTimePickDrop;
	continuousPickUp?: StopTimeContinuous;
	continuousDropOff?: StopTimeContinuous;
	shapeDistanceTraveled?: number;
	timepoint?: Timepoint;
	pickupBookingRule?: BookingRule | string;
	dropOffBookingRule?: BookingRule | string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	stopDirectionName?: string;
	ticketingStopTimeId?: string;
	ticketingType?: StopTimeTicketingType;
}
