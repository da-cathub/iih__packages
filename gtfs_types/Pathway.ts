import { BooleanyValue } from './_Universal';

export class Pathway {
	id: string;
	fromStop: string;
	toStop: string;
	pathwayMode: PathwayMode;
	isBidirectional: boolean;
	length?: number;
	traversalTime?: number;
	stairCount?: number;
	maxSlope?: number;
	minWidth?: number;
	signpostedAs?: string;
	reversedSignpostedAs?: string;

	constructor(init: GTFSPathwayObject);
	constructor(init: PathwayValues);
	constructor(init: GTFSPathwayObject | PathwayValues) {
		if ("pathway_id" in init) {
			this.id = init.pathway_id;
			this.fromStop = init.from_stop_id;
			this.toStop = init.to_stop_id;
			this.pathwayMode = init.pathway_mode;
			this.isBidirectional = init.is_bidirectional === 1;
			this.length = init.length;
			this.traversalTime = init.traversal_time;
			this.stairCount = init.stair_count;
			this.maxSlope = init.max_slope;
			this.minWidth = init.min_width;
			this.signpostedAs = init.signposted_as;
			this.reversedSignpostedAs = init.reversed_signposted_as;
		} else {
			this.id = init.id;
			this.fromStop = init.fromStop;
			this.toStop = init.toStop;
			this.pathwayMode = init.pathwayMode;
			this.isBidirectional = init.isBidirectional;
			this.length = init.length;
			this.traversalTime = init.traversalTime;
			this.stairCount = init.stairCount;
			this.maxSlope = init.maxSlope;
			this.minWidth = init.minWidth;
			this.signpostedAs = init.signpostedAs;
			this.reversedSignpostedAs = init.reversedSignpostedAs;
		}
	}

	public toJSON(): GTFSPathwayObject {
		return {
			pathway_id: this.id,
			from_stop_id: this.fromStop,
			to_stop_id: this.toStop,
			pathway_mode: this.pathwayMode,
			is_bidirectional: this.isBidirectional ? 1 : 0,
			length: this.length,
			traversal_time: this.traversalTime,
			stair_count: this.stairCount,
			max_slope: this.maxSlope,
			min_width: this.minWidth,
			signposted_as: this.signpostedAs,
			reversed_signposted_as: this.reversedSignpostedAs,
		}
	}

	public toString() {
		return `Pathway ${this.id} from ${this.fromStop} to ${this.toStop} (${this.pathwayMode})`;
	}
}

export interface GTFSPathwayObject {
	pathway_id: string;
	from_stop_id: string;
	to_stop_id: string;
	pathway_mode: PathwayMode;
	is_bidirectional: BooleanyValue;
	length?: number;
	traversal_time?: number;
	stair_count?: number;
	max_slope?: number;
	min_width?: number;
	signposted_as?: string;
	reversed_signposted_as?: string;
}

interface PathwayValues {
	id: string;
	fromStop: string;
	toStop: string;
	pathwayMode: PathwayMode;
	isBidirectional: boolean;
	length?: number;
	traversalTime?: number;
	stairCount?: number;
	maxSlope?: number;
	minWidth?: number;
	signpostedAs?: string;
	reversedSignpostedAs?: string;
}

export enum PathwayMode {
	Walkway = 1,
	Stairs = 2,
	MovingSidewalk = 3,
	Travelator = 3,
	Escalator = 4,
	Elevator = 5,
	FareGate = 6,
	ExitGate = 7,
}
