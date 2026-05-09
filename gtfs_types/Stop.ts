import Timezone from 'timezone-enum';

export class Stop {
	id: string;
	code?: string;
	name?: string;
	nameTTS?: string;
	description?: string;
	latitude?: number;
	longitude?: number;
	zone?: string;
	url?: string | URL;
	locationType: StopLocationType;
	parentStation?: string | Stop;
	timezone?: Timezone | string;
	wheelchairBoarding?: StopWheelchairBoarding;
	levelID?: string;
	platformCode?: string;
	stopAccess?: StopAccess;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	signpostedAs?: string;
	vehicleType?: number;

	constructor(init: StopValues);
	constructor(init: GTFSStopObject);
	constructor(init: StopValues | GTFSStopObject) {
		if ('stop_id' in init) {
			this.id = String(init.stop_id);
			this.code = init.stop_code != null ? String(init.stop_code) : undefined;
			this.name = init.stop_name;
			this.nameTTS = init.tts_stop_name;
			this.description = init.stop_desc;
			this.latitude = init.stop_lat;
			this.longitude = init.stop_lon;
			this.zone = init.zone_id != null ? String(init.zone_id) : undefined;
			this.url = init.stop_url;
			this.locationType = init.location_type ?? StopLocationType.Platform;
			this.parentStation = init.parent_station != null ? String(init.parent_station) : undefined;
			this.timezone = init.stop_timezone as Timezone;
			this.wheelchairBoarding = init.wheelchair_boarding;
			this.levelID = init.level_id != null ? String(init.level_id) : undefined;
			this.platformCode = init.platform_code != null ? String(init.platform_code) : undefined;
			this.stopAccess = init.stop_access;
			this.signpostedAs = init.signposted_as;
			this.vehicleType = init.vehicle_type;
		} else {
			this.id = init.id;
			this.code = init.code;
			this.name = init.name;
			this.nameTTS = init.nameTTS;
			this.description = init.description;
			this.latitude = init.latitude;
			this.longitude = init.longitude;
			this.zone = init.zone;
			this.url = init.url;
			this.locationType = init.locationType;
			this.parentStation = init.parentStation;
			this.timezone = init.timezone;
			this.wheelchairBoarding = init.wheelchairBoarding;
			this.levelID = init.levelID;
			this.platformCode = init.platformCode;
			this.stopAccess = init.stopAccess;
			this.signpostedAs = init.signpostedAs;
			this.vehicleType = init.vehicleType;
		}
	}

	public toJSON(): GTFSStopObject {
		return {
			stop_id: this.id,
			stop_code: this.code,
			stop_name: this.name,
			tts_stop_name: this.nameTTS,
			stop_desc: this.description,
			stop_lat: this.latitude,
			stop_lon: this.longitude,
			zone_id: this.zone,
			stop_url: this.url as string | undefined,
			location_type: this.locationType,
			parent_station: typeof this.parentStation === 'string' ? this.parentStation : this.parentStation?.id,
			stop_timezone: this.timezone as string | undefined,
			wheelchair_boarding: this.wheelchairBoarding,
			level_id: this.levelID,
			platform_code: this.platformCode,
			stop_access: this.stopAccess,
			signposted_as: this.signpostedAs,
			vehicle_type: this.vehicleType
		};
	}

	public toString() {
		return this.id;
	}

	get isChild() {
		return !!this.parentStation;
	}
}

export enum StopLocationType {
	Platform = 0,
	Station = 1,
	Entrance = 2,
	GenericNode = 3,
	BoardingArea = 4
}

export enum StopWheelchairBoarding {
	NoInformation = 0,
	Inherit = 0,
	Possible = 1,
	NotPossible = 2
}

export enum StopAccess {
	MustUsePathways = 0,
	DirectAccess = 1
}

export interface GTFSStopObject {
	stop_id: string | number;
	stop_code?: string | number;
	stop_name?: string;
	tts_stop_name?: string;
	stop_desc?: string;
	stop_lat?: number;
	stop_lon?: number;
	zone_id?: string | number;
	stop_url?: string;
	location_type?: StopLocationType;
	parent_station?: string | number;
	stop_timezone?: string;
	wheelchair_boarding?: StopWheelchairBoarding;
	level_id?: string | number;
	platform_code?: string | number;
	stop_access?: StopAccess;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	signposted_as?: string;
	vehicle_type?: number;
}

export interface StopValues {
	id: string;
	code?: string;
	name?: string;
	nameTTS?: string;
	description?: string;
	latitude?: number;
	longitude?: number;
	zone?: string;
	url?: string | URL;
	locationType: StopLocationType;
	parentStation?: string | Stop;
	timezone?: Timezone | string;
	wheelchairBoarding?: StopWheelchairBoarding;
	levelID?: string;
	platformCode?: string;
	stopAccess?: StopAccess;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	signpostedAs?: string;
	vehicleType?: number;
}
