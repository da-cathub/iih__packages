export class FareTransferRule {
    fromLegGroup?: string;
    toLegGroup?: string;
    transferCount?: number;
    durationLimit?: number;
    durationLimitType?: FareTransferDurationLimitType;
    fareTransferType: number;
    fareProduct?: string;

    constructor(init: {
        fromLegGroup?: string;
        toLegGroup?: string;
        transferCount?: number;
        durationLimit?: number;
        durationLimitType?: FareTransferDurationLimitType;
        fareTransferType: number;
        fareProduct?: string;
    }) {
        this.fromLegGroup = init.fromLegGroup;
        this.toLegGroup = init.toLegGroup;
        this.transferCount = init.transferCount;
        this.durationLimit = init.durationLimit;
        this.durationLimitType = init.durationLimitType;
        this.fareTransferType = init.fareTransferType;
        this.fareProduct = init.fareProduct;
    }

    public toJSON() {
        return {
            "from_leg_group": this.fromLegGroup ?? "",
            "to_leg_group": this.toLegGroup ?? "",
            "transfer_count": this.transferCount ?? "",
            "duration_limit": this.durationLimit ?? "",
            "duration_limit_type": this.durationLimitType ?? "",
            "fare_transfer_type": this.fareTransferType,
            "fare_product": this.fareProduct ?? ""
        }
    }

    public toString() {
        return `${this.fromLegGroup}_${this.toLegGroup}_${this.fareProduct}_${this.transferCount}_${this.durationLimit}`;
    }
}

export enum FareTransferDurationLimitType {
	/*
	0 - Between the departure fare validation of the current leg and the arrival fare validation of the next leg.
	1 - Between the departure fare validation of the current leg and the departure fare validation of the next leg.
	2 - Between the arrival fare validation of the current leg and the departure fare validation of the next leg.
	3 - Between the arrival fare validation of the current leg and the arrival fare validation of the next leg.
	*/
	DepartureArrival = 0,
	DepartureDeparture = 1,
	ArrivalDeparture = 2,
	ArrivalArrival = 3
}

export enum FareTransferType {
	/*
	0 - From-leg fare_leg_rules.fare_product_id plus fare_transfer_rules.fare_product_id; A + AB.
	1 - From-leg fare_leg_rules.fare_product_id plus fare_transfer_rules.fare_product_id plus to-leg fare_leg_rules.fare_product_id; A + AB + B.
	2 - fare_transfer_rules.fare_product_id; AB.
	*/
	FromLegPlusTransfer = 0,
	FromLegPlusTransferPlusToLeg = 1,
	TransferOnly = 2
}

export interface GTFSFareTransferRuleObject {
	from_leg_group: string;
	to_leg_group: string;
	transfer_count: number;
	duration_limit: number;
	duration_limit_type: FareTransferDurationLimitType;
	fare_transfer_type: number;
	fare_product: string;
}