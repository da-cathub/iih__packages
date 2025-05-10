import { BooleanyValue } from "./_Univeral";

export class RiderCategory {
	id: string;
	name: string;
	isDefaultRiderCategory: boolean;
	eligibilityUrl?: URL;

	constructor(init: GTFSRiderCategoryObject);
	constructor(init: RiderCategoryValues);
	constructor(init: GTFSRiderCategoryObject | RiderCategoryValues) {
		if ("rider_category_id" in init) {
			this.id = init.rider_category_id;
			this.name = init.rider_category_name;
			this.isDefaultRiderCategory = init.is_default_fare_category === 1;
			this.eligibilityUrl = init.eligibility_url ? new URL(init.eligibility_url) : undefined;
		} else if ("id" in init) {
			this.id = init.id;
			this.name = init.name;
			this.isDefaultRiderCategory = Boolean(init.isDefaultRiderCategory);
			this.eligibilityUrl = init.eligibilityUrl ? new URL(init.eligibilityUrl) : undefined;
		}
	}

	public toJSON(): GTFSRiderCategoryObject {
		return {
			"rider_category_id": this.id,
			"rider_category_name": this.name,
			"is_default_fare_category": this.isDefaultRiderCategory ? 1 : 0,
			"eligibility_url": this.eligibilityUrl?.toString() ?? ""
		};
	}

	public toString(): string {
		return this.isDefaultRiderCategory ?
			`${this.name} (${this.id}, default)` :
			`${this.name} (${this.id})`;
	}
}

export interface GTFSRiderCategoryObject {
	rider_category_id: string;
	rider_category_name: string;
	is_default_fare_category: BooleanyValue;
	eligibility_url?: string;
}

interface RiderCategoryValues {
	id: string;
	name: string;
	isDefaultRiderCategory: boolean | BooleanyValue;
	eligibilityUrl?: URL | string;
}