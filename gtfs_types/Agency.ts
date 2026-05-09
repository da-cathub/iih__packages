import Timezone from 'timezone-enum';
import { CemvSupport } from './_Universal';

export { CemvSupport };

export class Agency {
	id: string;
	name: string;
	url: string | URL;
	timezone: string | Timezone;
	lang?: string;
	phone?: string;
	fareURL?: string | URL;
	email?: string;
	cemvSupport?: CemvSupport;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	ticketingDeepLinkId?: string;

	constructor(init: AgencyValues);
	constructor(init: GTFSAgencyObject);
	constructor(init: AgencyValues | GTFSAgencyObject) {
		if ('agency_id' in init) {
			this.id = init.agency_id;
			this.name = init.agency_name;
			this.url = init.agency_url;
			this.timezone = init.agency_timezone ?? "Europe/Bratislava";
			this.lang = init.agency_lang;
			this.phone = init.agency_phone;
			this.fareURL = init.agency_fare_url;
			this.email = init.agency_email;
			this.cemvSupport = init.cemv_support;
			this.ticketingDeepLinkId = init.ticketing_deep_link_id;
		} else {
			this.id = init.id;
			this.name = init.name;
			this.url = init.url;
			this.timezone = init.timezone ?? "Europe/Bratislava";
			this.lang = init.lang;
			this.phone = init.phone;
			this.fareURL = init.fareURL;
			this.email = init.email;
			this.cemvSupport = init.cemvSupport;
			this.ticketingDeepLinkId = init.ticketingDeepLinkId;
		}
	}

	public toJSON(): GTFSAgencyObject {
		return {
			agency_id: this.id,
			agency_name: this.name,
			agency_url: this.url as string,
			agency_timezone: this.timezone as Timezone,
			agency_lang: this.lang,
			agency_phone: this.phone,
			agency_fare_url: this.fareURL as string | undefined,
			agency_email: this.email,
			cemv_support: this.cemvSupport,
			ticketing_deep_link_id: this.ticketingDeepLinkId
		};
	}

	public toString() {
		return this.id;
	}
}

export interface GTFSAgencyObject {
	agency_id: string;
	agency_name: string;
	agency_url: string;
	agency_timezone: Timezone;
	agency_lang?: string;
	agency_phone?: string;
	agency_fare_url?: string;
	agency_email?: string;
	cemv_support?: CemvSupport;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	ticketing_deep_link_id?: string;
}

export interface AgencyValues {
	id: string;
	name: string;
	url: string | URL;
	timezone?: string | Timezone;
	lang?: string;
	phone?: string;
	fareURL?: string | URL;
	email?: string;
	cemvSupport?: CemvSupport;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	ticketingDeepLinkId?: string;
}
