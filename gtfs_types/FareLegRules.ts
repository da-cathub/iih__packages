import { FareProduct } from './FareProduct';

export class FareLegRule {
	legGroup?: string;
	network?: string;
	fromArea?: string;
	toArea?: string;
	fromTimeframeGroup?: string;
	toTimeframeGroup?: string;
	fareProduct: FareProduct | string;
	rulePriority?: number;

	constructor(init: FareLegRuleValues);
	constructor(init: GTFSFareLegRuleObject);
	constructor(init: FareLegRuleValues | GTFSFareLegRuleObject) {
		if ('fare_product_id' in init) {
			this.legGroup = init.leg_group_id;
			this.network = init.network_id;
			this.fromArea = init.from_area_id;
			this.toArea = init.to_area_id;
			this.fromTimeframeGroup = init.from_timeframe_group_id;
			this.toTimeframeGroup = init.to_timeframe_group_id;
			this.fareProduct = init.fare_product_id;
			this.rulePriority = init.rule_priority;
		} else {
			this.legGroup = init.legGroup;
			this.network = init.network;
			this.fromArea = init.fromArea;
			this.toArea = init.toArea;
			this.fromTimeframeGroup = init.fromTimeframeGroup;
			this.toTimeframeGroup = init.toTimeframeGroup;
			this.fareProduct = init.fareProduct;
			this.rulePriority = init.rulePriority;
		}
	}

	public toJSON(): GTFSFareLegRuleObject {
		return {
			leg_group_id: this.legGroup,
			network_id: this.network,
			from_area_id: this.fromArea,
			to_area_id: this.toArea,
			from_timeframe_group_id: this.fromTimeframeGroup,
			to_timeframe_group_id: this.toTimeframeGroup,
			fare_product_id: typeof this.fareProduct === 'string' ? this.fareProduct : this.fareProduct.id,
			rule_priority: this.rulePriority
		};
	}

	public toString() {
		const productId = typeof this.fareProduct === 'string' ? this.fareProduct : this.fareProduct.id;
		return `${this.legGroup}_${productId}`;
	}
}

export interface GTFSFareLegRuleObject {
	leg_group_id?: string;
	network_id?: string;
	from_area_id?: string;
	to_area_id?: string;
	from_timeframe_group_id?: string;
	to_timeframe_group_id?: string;
	fare_product_id: string;
	rule_priority?: number;
}

export interface FareLegRuleValues {
	legGroup?: string;
	network?: string;
	fromArea?: string;
	toArea?: string;
	fromTimeframeGroup?: string;
	toTimeframeGroup?: string;
	fareProduct: FareProduct | string;
	rulePriority?: number;
}
