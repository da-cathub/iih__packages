import { BooleanyValue } from './_Universal';
import { Agency } from './Agency';
import { Route } from './Route';
import { Trip } from './Trip';

export class Attribution {
	id?: string;
	agency?: Agency | string;
	route?: Route | string;
	trip?: Trip | string;
	organizationName: string;
	isProducer?: boolean;
	isOperator?: boolean;
	isAuthority?: boolean;
	attributionUrl?: string | URL;
	attributionEmail?: string;
	attributionPhone?: string;

	constructor(init: GTFSAttributionObject);
	constructor(init: AttributionValues);
	constructor(init: GTFSAttributionObject | AttributionValues) {
		if ("organization_name" in init && !("organizationName" in init)) {
			this.id = init.attribution_id;
			this.agency = init.agency_id;
			this.route = init.route_id;
			this.trip = init.trip_id;
			this.organizationName = init.organization_name;
			this.isProducer = init.is_producer === 1;
			this.isOperator = init.is_operator === 1;
			this.isAuthority = init.is_authority === 1;
			this.attributionUrl = init.attribution_url;
			this.attributionEmail = init.attribution_email;
			this.attributionPhone = init.attribution_phone;
		} else {
			const v = init as AttributionValues;
			this.id = v.id;
			this.agency = v.agency;
			this.route = v.route;
			this.trip = v.trip;
			this.organizationName = v.organizationName;
			this.isProducer = v.isProducer;
			this.isOperator = v.isOperator;
			this.isAuthority = v.isAuthority;
			this.attributionUrl = v.attributionUrl;
			this.attributionEmail = v.attributionEmail;
			this.attributionPhone = v.attributionPhone;
		}
	}

	public toJSON(): GTFSAttributionObject {
		return {
			attribution_id: this.id,
			agency_id: typeof this.agency === 'string' ? this.agency : this.agency?.id,
			route_id: typeof this.route === 'string' ? this.route : this.route?.id,
			trip_id: typeof this.trip === 'string' ? this.trip : this.trip?.id,
			organization_name: this.organizationName,
			is_producer: this.isProducer ? 1 : 0,
			is_operator: this.isOperator ? 1 : 0,
			is_authority: this.isAuthority ? 1 : 0,
			attribution_url: this.attributionUrl as string | undefined,
			attribution_email: this.attributionEmail,
			attribution_phone: this.attributionPhone,
		};
	}

	public toString(): string {
		return this.id ?? this.organizationName;
	}
}

export interface GTFSAttributionObject {
	attribution_id?: string;
	agency_id?: string;
	route_id?: string;
	trip_id?: string;
	organization_name: string;
	is_producer?: BooleanyValue;
	is_operator?: BooleanyValue;
	is_authority?: BooleanyValue;
	attribution_url?: string;
	attribution_email?: string;
	attribution_phone?: string;
}

interface AttributionValues {
	id?: string;
	agency?: Agency | string;
	route?: Route | string;
	trip?: Trip | string;
	organizationName: string;
	isProducer?: boolean;
	isOperator?: boolean;
	isAuthority?: boolean;
	attributionUrl?: string | URL;
	attributionEmail?: string;
	attributionPhone?: string;
}
