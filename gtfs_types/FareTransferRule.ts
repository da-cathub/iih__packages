import { FareProduct } from './FareProduct';

export class FareTransferRule {
	fromLegGroup?: string;
	toLegGroup?: string;
	transferCount?: number;
	durationLimit?: number;
	durationLimitType?: FareTransferDurationLimitType;
	fareTransferType: FareTransferType;
	fareProduct?: FareProduct | string;

	constructor(init: FareTransferRuleValues);
	constructor(init: GTFSFareTransferRuleObject);
	constructor(init: FareTransferRuleValues | GTFSFareTransferRuleObject) {
		if ('fare_transfer_type' in init) {
			this.fromLegGroup = init.from_leg_group_id;
			this.toLegGroup = init.to_leg_group_id;
			this.transferCount = init.transfer_count;
			this.durationLimit = init.duration_limit;
			this.durationLimitType = init.duration_limit_type;
			this.fareTransferType = init.fare_transfer_type;
			this.fareProduct = init.fare_product_id;
		} else {
			this.fromLegGroup = init.fromLegGroup;
			this.toLegGroup = init.toLegGroup;
			this.transferCount = init.transferCount;
			this.durationLimit = init.durationLimit;
			this.durationLimitType = init.durationLimitType;
			this.fareTransferType = init.fareTransferType;
			this.fareProduct = init.fareProduct;
		}
	}

	public toJSON(): GTFSFareTransferRuleObject {
		return {
			from_leg_group_id: this.fromLegGroup,
			to_leg_group_id: this.toLegGroup,
			transfer_count: this.transferCount,
			duration_limit: this.durationLimit,
			duration_limit_type: this.durationLimitType,
			fare_transfer_type: this.fareTransferType,
			fare_product_id: typeof this.fareProduct === 'string' ? this.fareProduct : this.fareProduct?.id
		};
	}

	public toString() {
		const productId = typeof this.fareProduct === 'string' ? this.fareProduct : this.fareProduct?.id ?? "";
		return `${this.fromLegGroup}_${this.toLegGroup}_${productId}_${this.transferCount}_${this.durationLimit}`;
	}
}

export enum FareTransferDurationLimitType {
	DepartureArrival = 0,
	DepartureDeparture = 1,
	ArrivalDeparture = 2,
	ArrivalArrival = 3
}

export enum FareTransferType {
	FromLegPlusTransfer = 0,
	FromLegPlusTransferPlusToLeg = 1,
	TransferOnly = 2
}

export interface GTFSFareTransferRuleObject {
	from_leg_group_id?: string;
	to_leg_group_id?: string;
	transfer_count?: number;
	duration_limit?: number;
	duration_limit_type?: FareTransferDurationLimitType;
	fare_transfer_type: FareTransferType;
	fare_product_id?: string;
}

export interface FareTransferRuleValues {
	fromLegGroup?: string;
	toLegGroup?: string;
	transferCount?: number;
	durationLimit?: number;
	durationLimitType?: FareTransferDurationLimitType;
	fareTransferType: FareTransferType;
	fareProduct?: FareProduct | string;
}
