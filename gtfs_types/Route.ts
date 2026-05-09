import { Agency, CemvSupport } from "./Agency";
import { RouteVehicleType, RouteVehicleTypeExtended } from "./RouteVehicleType";

export class Route {
	id: string;
	agency: Agency | string;
	shortName?: string;
	longName?: string;
	description?: string;
	type: RouteVehicleType | RouteVehicleTypeExtended;
	url?: string | URL;
	backgroundColor?: string;
	foregroundColor?: string;
	sortOrder?: number;
	continuousPickUp?: RouteContinuous;
	continuousDropOff?: RouteContinuous;
	networkID?: string;
	cemvSupport?: CemvSupport;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	checkinDuration?: number;
	ticketingDeepLinkId?: string;

	constructor(init: RouteValues);
	constructor(init: GTFSRouteObject);
	constructor(init: RouteValues | GTFSRouteObject) {
		if ('route_id' in init) {
			this.id = init.route_id;
			this.agency = init.agency_id ?? "";
			this.shortName = init.route_short_name;
			this.longName = init.route_long_name;
			this.description = init.route_desc;
			this.type = init.route_type;
			this.url = init.route_url;
			this.backgroundColor = init.route_color;
			this.foregroundColor = init.route_text_color;
			this.sortOrder = init.route_sort_order;
			this.continuousPickUp = init.continuous_pickup;
			this.continuousDropOff = init.continuous_drop_off;
			this.networkID = init.network_id;
			this.cemvSupport = init.cemv_support;
			this.checkinDuration = init.checkin_duration;
			this.ticketingDeepLinkId = init.ticketing_deep_link_id;
		} else {
			this.id = init.id;
			this.agency = init.agency;
			this.shortName = init.shortName;
			this.longName = init.longName;
			this.description = init.description;
			this.type = init.type;
			this.url = init.url;
			this.backgroundColor = init.backgroundColor;
			this.foregroundColor = init.foregroundColor;
			this.sortOrder = init.sortOrder;
			this.continuousPickUp = init.continuousPickUp;
			this.continuousDropOff = init.continuousDropOff;
			this.networkID = init.networkID;
			this.cemvSupport = init.cemvSupport;
			this.checkinDuration = init.checkinDuration;
			this.ticketingDeepLinkId = init.ticketingDeepLinkId;
		}
	}

	public toJSON(): GTFSRouteObject {
		return {
			route_id: this.id,
			agency_id: typeof this.agency === 'string' ? this.agency : this.agency.id,
			route_short_name: this.shortName,
			route_long_name: this.longName,
			route_desc: this.description,
			route_type: this.type,
			route_url: this.url as string | undefined,
			route_color: this.backgroundColor,
			route_text_color: this.foregroundColor,
			route_sort_order: this.sortOrder,
			continuous_pickup: this.continuousPickUp,
			continuous_drop_off: this.continuousDropOff,
			network_id: this.networkID,
			cemv_support: this.cemvSupport,
			checkin_duration: this.checkinDuration,
			ticketing_deep_link_id: this.ticketingDeepLinkId
		};
	}

	public toString() {
		return this.id;
	}
}

export enum RouteContinuous {
	Continuous = 0,
	NoContinuous = 1,
	PhoneAgency = 2,
	DriverArrangement = 3
}

export interface GTFSRouteObject {
	route_id: string;
	agency_id?: string;
	route_short_name?: string;
	route_long_name?: string;
	route_desc?: string;
	route_type: RouteVehicleType | RouteVehicleTypeExtended;
	route_url?: string;
	route_color?: string;
	route_text_color?: string;
	route_sort_order?: number;
	continuous_pickup?: RouteContinuous;
	continuous_drop_off?: RouteContinuous;
	network_id?: string;
	cemv_support?: CemvSupport;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	checkin_duration?: number;
	ticketing_deep_link_id?: string;
}

export interface RouteValues {
	id: string;
	agency: Agency | string;
	shortName?: string;
	longName?: string;
	description?: string;
	type: RouteVehicleType | RouteVehicleTypeExtended;
	url?: string | URL;
	backgroundColor?: string;
	foregroundColor?: string;
	sortOrder?: number;
	continuousPickUp?: RouteContinuous;
	continuousDropOff?: RouteContinuous;
	networkID?: string;
	cemvSupport?: CemvSupport;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	checkinDuration?: number;
	ticketingDeepLinkId?: string;
}
