import { Agency } from './Agency';

export class FareAttribute {
	id: string;
	price: number;
	currencyType: string;
	paymentMethod: FareAttributePaymentMethod;
	transfers: FareAttributeTransfers;
	agency?: Agency | string;
	transferDuration?: number;
	icPrice?: -1 | number

	constructor(init: FareAttributeValues);
	constructor(init: GTFSFareAttributeObject);
	constructor(init: FareAttributeValues | GTFSFareAttributeObject) {
		if ('fare_id' in init) {
			this.id = init.fare_id;
			this.price = init.price;
			this.currencyType = init.currency_type;
			this.paymentMethod = init.payment_method;
			this.transfers = init.transfers;
			this.agency = init.agency_id;
			this.transferDuration = init.transfer_duration;
			this.icPrice = init.ic_price;
		} else {
			this.id = init.id;
			this.price = init.price;
			this.currencyType = init.currencyType;
			this.paymentMethod = init.paymentMethod;
			this.transfers = init.transfers;
			this.agency = init.agency;
			this.transferDuration = init.transferDuration;
			this.icPrice = init.icPrice
		}
	}

	public toJSON(): GTFSFareAttributeObject {
		return {
			fare_id: this.id,
			price: this.price,
			currency_type: this.currencyType,
			payment_method: this.paymentMethod,
			transfers: this.transfers,
			agency_id: typeof this.agency === 'string' ? this.agency : this.agency?.id,
			transfer_duration: this.transferDuration,
			ic_price: this.icPrice
		};
	}

	public toString() {
		return this.id;
	}
}

export enum FareAttributePaymentMethod {
	OnBoard = 0,
	BeforeBoarding = 1
}

export enum FareAttributeTransfers {
	NoTransfers = "0",
	OneTransfer = "1",
	TwoTransfers = "2",
	Unlimited = ""
}

export interface GTFSFareAttributeObject {
	fare_id: string;
	price: number;
	currency_type: string;
	payment_method: FareAttributePaymentMethod;
	transfers: FareAttributeTransfers;
	agency_id?: string;
	transfer_duration?: number;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	ic_price?: -1 | number
}

/** @deprecated Use GTFSFareAttributeObject */
export type GTFSFareAtributeObject = GTFSFareAttributeObject;

export interface FareAttributeValues {
	id: string;
	price: number;
	currencyType: string;
	paymentMethod: FareAttributePaymentMethod;
	transfers: FareAttributeTransfers;
	agency?: Agency | string;
	transferDuration?: number;
	icPrice?: -1 | number
}
