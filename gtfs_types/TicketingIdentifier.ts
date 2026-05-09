//! Google Transit ticketing extension
// @see https://developers.google.com/transit/gtfs/reference/google-transit-ticketing-extension

import { Agency } from './Agency';
import { Stop } from './Stop';

export class TicketingIdentifier {
	agency: Agency | string;
	stop: Stop | string;
	ticketingStopId: string;

	constructor(init: TicketingIdentifierValues);
	constructor(init: GTFSTicketingIdentifierObject);
	constructor(init: TicketingIdentifierValues | GTFSTicketingIdentifierObject) {
		if ('agency_id' in init) {
			this.agency = init.agency_id;
			this.stop = init.stop_id;
			this.ticketingStopId = init.ticketing_stop_id;
		} else {
			this.agency = init.agency;
			this.stop = init.stop;
			this.ticketingStopId = init.ticketingStopId;
		}
	}

	public toJSON(): GTFSTicketingIdentifierObject {
		return {
			agency_id: typeof this.agency === 'string' ? this.agency : this.agency.id,
			stop_id: typeof this.stop === 'string' ? this.stop : this.stop.id,
			ticketing_stop_id: this.ticketingStopId
		};
	}

	public toString() {
		return this.ticketingStopId;
	}
}

export interface GTFSTicketingIdentifierObject {
	agency_id: string;
	stop_id: string;
	ticketing_stop_id: string;
}

export interface TicketingIdentifierValues {
	agency: Agency | string;
	stop: Stop | string;
	ticketingStopId: string;
}
