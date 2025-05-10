export class RouteNetwork {
	network: string;
	route: string;

	constructor(init: GTFSSRouteNetworkObject);
	constructor(init: { network: string; route: string });
	constructor(init: GTFSSRouteNetworkObject | { network: string; route: string }) {
		if ("network_id" in init) {
			this.network = init.network_id;
			this.route = init.route_id;
		} else if ("id" in init) {
			this.network = init.network;
			this.route = init.route;
		}
	}

	public toJSON(): GTFSSRouteNetworkObject {
		return {
			network_id: this.network,
			route_id: this.route
		};
	}

	public toString() {
		return `${this.network}_${this.route}`;
	}
}

export interface GTFSSRouteNetworkObject {
	network_id: string;
	route_id: string;
}