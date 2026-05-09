import { Stop } from './Stop';
import { Route } from './Route';
import { Trip } from './Trip';

export class Transfer {
	fromStop?: Stop | string;
	toStop?: Stop | string;
	transferType: TransferType;
	minTransferTime?: number;
	fromRoute?: Route | string;
	toRoute?: Route | string;
	fromTrip?: Trip | string;
	toTrip?: Trip | string;

	constructor(init: GTFSTransferObject);
	constructor(init: TransferValues);
	constructor(init: GTFSTransferObject | TransferValues) {
		if ("transfer_type" in init && !("transferType" in init)) {
			this.fromStop = init.from_stop_id;
			this.toStop = init.to_stop_id;
			this.transferType = init.transfer_type;
			this.minTransferTime = init.min_transfer_time;
			this.fromRoute = init.from_route_id;
			this.toRoute = init.to_route_id;
			this.fromTrip = init.from_trip_id;
			this.toTrip = init.to_trip_id;
		} else {
			const v = init as TransferValues;
			this.fromStop = v.fromStop;
			this.toStop = v.toStop;
			this.transferType = v.transferType;
			this.minTransferTime = v.minTransferTime;
			this.fromRoute = v.fromRoute;
			this.toRoute = v.toRoute;
			this.fromTrip = v.fromTrip;
			this.toTrip = v.toTrip;
		}
	}

	private static _id(v: { toString(): string } | string | undefined): string {
		return v === undefined ? "" : typeof v === 'string' ? v : v.toString();
	}

	public toJSON(): GTFSTransferObject {
		return {
			from_stop_id: Transfer._id(this.fromStop),
			to_stop_id: Transfer._id(this.toStop),
			transfer_type: this.transferType,
			min_transfer_time: this.minTransferTime,
			from_route_id: Transfer._id(this.fromRoute) || undefined,
			to_route_id: Transfer._id(this.toRoute) || undefined,
			from_trip_id: Transfer._id(this.fromTrip) || undefined,
			to_trip_id: Transfer._id(this.toTrip) || undefined,
		};
	}

	public toString(): string {
		return `${Transfer._id(this.fromStop)}_${Transfer._id(this.toStop)}_${this.transferType}`;
	}
}

export enum TransferType {
	Recommended = 0,
	Timed = 1,
	MinTime = 2,
	NotPossible = 3,
	InSeat = 4,
	InSeatNotAllowed = 5
}

export interface GTFSTransferObject {
	from_stop_id?: string;
	to_stop_id?: string;
	transfer_type: TransferType;
	min_transfer_time?: number;
	from_route_id?: string;
	to_route_id?: string;
	from_trip_id?: string;
	to_trip_id?: string;
}

interface TransferValues {
	fromStop?: Stop | string;
	toStop?: Stop | string;
	transferType: TransferType;
	minTransferTime?: number;
	fromRoute?: Route | string;
	toRoute?: Route | string;
	fromTrip?: Trip | string;
	toTrip?: Trip | string;
}
