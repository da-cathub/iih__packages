import { Route } from './Route';
import { Network } from './Network';

export class RouteNetwork {
	network: Network | string;
	route: Route | string;

	constructor(init: GTFSSRouteNetworkObject);
	constructor(init: { network: Network | string; route: Route | string });
	constructor(init: GTFSSRouteNetworkObject | { network: Network | string; route: Route | string }) {
		if ("network_id" in init) {
			this.network = init.network_id;
			this.route = init.route_id;
		} else {
			this.network = init.network;
			this.route = init.route;
		}
	}

	public toJSON(): GTFSSRouteNetworkObject {
		return {
			network_id: typeof this.network === 'string' ? this.network : this.network.id,
			route_id: typeof this.route === 'string' ? this.route : this.route.id
		};
	}

	public toString() {
		const networkId = typeof this.network === 'string' ? this.network : this.network.id;
		const routeId = typeof this.route === 'string' ? this.route : this.route.id;
		return `${networkId}_${routeId}`;
	}
}

export interface GTFSSRouteNetworkObject {
	network_id: string;
	route_id: string;
}
