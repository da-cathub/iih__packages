//! Google Transit ticketing extension
// @see https://developers.google.com/transit/gtfs/reference/google-transit-ticketing-extension

export class TicketingDeepLink {
	id: string;
	androidIntentUri?: string;
	iosUniversalLinkUrl?: string | URL;
	webUrl?: string | URL;

	constructor(init: TicketingDeepLinkValues);
	constructor(init: GTFSTicketingDeepLinkObject);
	constructor(init: TicketingDeepLinkValues | GTFSTicketingDeepLinkObject) {
		if ('ticketing_deep_link_id' in init) {
			this.id = init.ticketing_deep_link_id;
			this.androidIntentUri = init.android_intent_uri;
			this.iosUniversalLinkUrl = init.ios_universal_link_url;
			this.webUrl = init.web_url;
		} else {
			this.id = init.id;
			this.androidIntentUri = init.androidIntentUri;
			this.iosUniversalLinkUrl = init.iosUniversalLinkUrl;
			this.webUrl = init.webUrl;
		}
	}

	public toJSON(): GTFSTicketingDeepLinkObject {
		return {
			ticketing_deep_link_id: this.id,
			android_intent_uri: this.androidIntentUri,
			ios_universal_link_url: this.iosUniversalLinkUrl as string | undefined,
			web_url: this.webUrl as string | undefined
		};
	}

	public toString() {
		return this.id;
	}
}

export interface GTFSTicketingDeepLinkObject {
	ticketing_deep_link_id: string;
	android_intent_uri?: string;
	ios_universal_link_url?: string;
	web_url?: string;
}

export interface TicketingDeepLinkValues {
	id: string;
	androidIntentUri?: string;
	iosUniversalLinkUrl?: string | URL;
	webUrl?: string | URL;
}
