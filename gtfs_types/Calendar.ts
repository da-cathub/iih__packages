import { BooleanyValue, dateToGTFS } from './_Universal';

export class Calendar {
	id: string;
	monday: boolean;
	tuesday: boolean;
	wednesday: boolean;
	thursday: boolean;
	friday: boolean;
	saturday: boolean;
	sunday: boolean;
	start: Date;
	end: Date;

	constructor(init: CalendarValues);
	constructor(init: GTFSCalendarObject);
	constructor(init: CalendarValues | GTFSCalendarObject) {
		if ('service_id' in init) {
			this.id = init.service_id;
			this.monday = init.monday === 1;
			this.tuesday = init.tuesday === 1;
			this.wednesday = init.wednesday === 1;
			this.thursday = init.thursday === 1;
			this.friday = init.friday === 1;
			this.saturday = init.saturday === 1;
			this.sunday = init.sunday === 1;
			this.start = new Date(init.start_date);
			this.end = new Date(init.end_date);
		} else {
			this.id = init.id;
			this.monday = init.monday;
			this.tuesday = init.tuesday;
			this.wednesday = init.wednesday;
			this.thursday = init.thursday;
			this.friday = init.friday;
			this.saturday = init.saturday;
			this.sunday = init.sunday;
			this.start = init.start;
			this.end = init.end;
		}
	}

	public toJSON(): GTFSCalendarObject {
		return {
			service_id: this.id,
			monday: this.monday ? 1 : 0,
			tuesday: this.tuesday ? 1 : 0,
			wednesday: this.wednesday ? 1 : 0,
			thursday: this.thursday ? 1 : 0,
			friday: this.friday ? 1 : 0,
			saturday: this.saturday ? 1 : 0,
			sunday: this.sunday ? 1 : 0,
			start_date: dateToGTFS(this.start),
			end_date: dateToGTFS(this.end)
		};
	}

	public toString() {
		return this.id;
	}
}

export interface GTFSCalendarObject {
	service_id: string;
	monday: BooleanyValue;
	tuesday: BooleanyValue;
	wednesday: BooleanyValue;
	thursday: BooleanyValue;
	friday: BooleanyValue;
	saturday: BooleanyValue;
	sunday: BooleanyValue;
	start_date: string;
	end_date: string;
}

export interface CalendarValues {
	id: string;
	monday: boolean;
	tuesday: boolean;
	wednesday: boolean;
	thursday: boolean;
	friday: boolean;
	saturday: boolean;
	sunday: boolean;
	start: Date;
	end: Date;
}
