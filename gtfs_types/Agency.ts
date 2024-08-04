import Timezone from 'timezone-enum';

export class Agency {

    /*

	Field Name			Type			Presence					Description
	agency_id			Unique ID		Conditionally Required		Identifies a transit brand which is often synonymous with a transit agency. Note that in some cases, such as when a single agency operates multiple separate services, agencies and brands are distinct. This document uses the term "agency" in place of "brand". A dataset may contain data from multiple agencies.

																	Conditionally Required:
																	- Required when the dataset contains data for multiple transit agencies.
																	- Recommended otherwise.
	agency_name			Text			Required					Full name of the transit agency.
	agency_url			URL				Required					URL of the transit agency.
	agency_timezone		Timezone		Required					Timezone where the transit agency is located. If multiple agencies are specified in the dataset, each must have the same agency_timezone.
	agency_lang			Language code	Optional					Primary language used by this transit agency. Should be provided to help GTFS consumers choose capitalization rules and other language-specific settings for the dataset.
	agency_phone		Phone number	Optional					A voice telephone number for the specified agency. This field is a string value that presents the telephone number as typical for the agency's service area. It may contain punctuation marks to group the digits of the number. Dialable text (for example, TriMet's "503-238-RIDE") is permitted, but the field must not contain any other descriptive text.
	agency_fare_url		URL				Optional					URL of a web page that allows a rider to purchase tickets or other fare instruments for that agency online.
	agency_email		Email			Optional					Email address actively monitored by the agency’s customer service department. This email address should be a direct contact point where transit riders can reach a customer service representative at the agency.

    */

	id: 		string;
	name: 		string;
	url: 		string | URL;
	timezone: 	string | Timezone;
	lang?: 		string;
	phone?: 	string;
	fareURL?: 	string | URL;
	email?: 	string;

	constructor(init: {id: string, name: string, url: string | URL, timezone?: string | Timezone, lang?: string, phone?: string, fareURL?: string | URL, email?: string} | GTFSAgencyObject | any) {
		if (init.hasOwnProperty('id')) {
			this.id 		= init.id
			this.name 		= init.name
			this.url 		= init.url
			this.timezone 	= init.timezone ?? "Europe/Bratislava"
			this.lang 		= init.lang
			this.phone 		= init.phone
			this.fareURL 	= init.fareURL
			this.email 		= init.email
		} else {
			this.id 		= init.agency_id
			this.name 		= init.agency_name
			this.url 		= init.agency_url
			this.timezone 	= init.agency_timezone ?? "Europe/Bratislava"
			this.lang 		= init.agency_lang
			this.phone 		= init.agency_phone
			this.fareURL 	= init.agency_fare_url
			this.email 		= init.agency_email
		}
	}

	public toJSON() {
		return {
			"agency_id": 		this.id,
			"agency_name": 		this.name,
			"agency_url": 		this.url as string,
			"agency_timezone": 	this.timezone as string,
			"agency_lang": 		this.lang,
			"agency_phone": 	this.phone,
			"agency_fare_url": 	(this.fareURL ?? "") as string,
			"agency_email": 	this.email
		  }
	}

	public toString() {
		return this.id
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
}