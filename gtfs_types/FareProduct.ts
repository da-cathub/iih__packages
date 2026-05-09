import { RiderCategory } from './RiderCategory';

export class FareProduct {
	id: string;
	name?: string;
	riderCategory?: RiderCategory | string;
	fareMedia?: string;
	amount: number;
	currency: string;

	constructor(init: FareProductValues);
	constructor(init: GTFSFareProductObject);
	constructor(init: FareProductValues | GTFSFareProductObject) {
		if ('fare_product_id' in init) {
			this.id = init.fare_product_id;
			this.name = init.fare_product_name;
			this.riderCategory = init.rider_category_id;
			this.fareMedia = init.fare_media_id;
			this.amount = init.amount;
			this.currency = init.currency;
		} else {
			this.id = init.id;
			this.name = init.name;
			this.riderCategory = init.riderCategory;
			this.fareMedia = init.fareMedia;
			this.amount = init.amount;
			this.currency = init.currency;
		}
	}

	public toJSON(): GTFSFareProductObject {
		return {
			fare_product_id: this.id,
			fare_product_name: this.name,
			rider_category_id: typeof this.riderCategory === 'string' ? this.riderCategory : this.riderCategory?.id,
			fare_media_id: this.fareMedia,
			amount: this.amount,
			currency: this.currency
		};
	}

	public toString() {
		return `${this.id}_${this.fareMedia}`;
	}
}

export interface GTFSFareProductObject {
	fare_product_id: string;
	fare_product_name?: string;
	rider_category_id?: string;
	fare_media_id?: string;
	amount: number;
	currency: string;
}

export interface FareProductValues {
	id: string;
	name?: string;
	riderCategory?: RiderCategory | string;
	fareMedia?: string;
	amount: number;
	currency: string;
}
