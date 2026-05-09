export class FareRule {
	fare: string;
	route?: string;
	origin?: string;
	destination?: string;
	contains?: string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	containsRouteId?: string;

	constructor(init: FareRuleValues);
	constructor(init: GTFSFareRuleObject);
	constructor(init: FareRuleValues | GTFSFareRuleObject) {
		if ('fare_id' in init) {
			this.fare = init.fare_id;
			this.route = init.route_id;
			this.origin = init.origin_id;
			this.destination = init.destination_id;
			this.contains = init.contains_id;
			this.containsRouteId = init.contains_route_id;
		} else {
			this.fare = init.fare;
			this.route = init.route;
			this.origin = init.origin;
			this.destination = init.destination;
			this.contains = init.contains;
			this.containsRouteId = init.containsRouteId;
		}
	}

	public toJSON(): GTFSFareRuleObject {
		return {
			fare_id: this.fare,
			route_id: this.route,
			origin_id: this.origin,
			destination_id: this.destination,
			contains_id: this.contains,
			contains_route_id: this.containsRouteId
		};
	}

	public toString() {
		return `${this.fare}_${this.route}_${this.origin}_${this.destination}_${this.contains}`;
	}
}

export interface GTFSFareRuleObject {
	fare_id: string;
	route_id?: string;
	origin_id?: string;
	destination_id?: string;
	contains_id?: string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	contains_route_id?: string;
}

export interface FareRuleValues {
	fare: string;
	route?: string;
	origin?: string;
	destination?: string;
	contains?: string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	containsRouteId?: string;
}
