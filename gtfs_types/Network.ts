export class Network {
	id: string;
	name?: string;

	constructor(init: NetworkValues);
	constructor(init: GTFSNetworkObject);
	constructor(init: NetworkValues | GTFSNetworkObject) {
		if ('network_id' in init) {
			this.id = init.network_id;
			this.name = init.network_name;
		} else {
			this.id = init.id;
			this.name = init.name;
		}
	}

	public toJSON(): GTFSNetworkObject {
		return {
			network_id: this.id,
			network_name: this.name
		};
	}

	public toString() {
		return this.id;
	}
}

export interface GTFSNetworkObject {
	network_id: string;
	network_name?: string;
}

export interface NetworkValues {
	id: string;
	name?: string;
}
