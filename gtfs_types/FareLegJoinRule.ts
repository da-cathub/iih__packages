import { Stop } from './Stop';

export class FareLegJoinRule {
	fromNetwork: string;
	toNetwork: string;
	fromStop?: Stop | string;
	toStop?: Stop | string;

	constructor(init: GTFSFareLegJoinRuleObject);
	constructor(init: FareLegJoinRuleValues);
	constructor(init: GTFSFareLegJoinRuleObject | FareLegJoinRuleValues) {
		if ("from_network_id" in init) {
			this.fromNetwork = init.from_network_id;
			this.toNetwork = init.to_network_id;
			this.fromStop = init.from_stop_id;
			this.toStop = init.to_stop_id;
		} else {
			this.fromNetwork = init.fromNetwork;
			this.toNetwork = init.toNetwork;
			this.fromStop = init.fromStop;
			this.toStop = init.toStop;
		}
	}

	public toJSON(): GTFSFareLegJoinRuleObject {
		return {
			from_network_id: this.fromNetwork,
			to_network_id: this.toNetwork,
			from_stop_id: typeof this.fromStop === 'string' ? this.fromStop : this.fromStop?.id,
			to_stop_id: typeof this.toStop === 'string' ? this.toStop : this.toStop?.id,
		};
	}

	public toString(): string {
		const fromStop = typeof this.fromStop === 'string' ? this.fromStop : this.fromStop?.id ?? "";
		const toStop = typeof this.toStop === 'string' ? this.toStop : this.toStop?.id ?? "";
		return `${this.fromNetwork}_${this.toNetwork}_${fromStop}_${toStop}`;
	}
}

export interface GTFSFareLegJoinRuleObject {
	from_network_id: string;
	to_network_id: string;
	from_stop_id?: string;
	to_stop_id?: string;
}

interface FareLegJoinRuleValues {
	fromNetwork: string;
	toNetwork: string;
	fromStop?: Stop | string;
	toStop?: Stop | string;
}
