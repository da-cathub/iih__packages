import { dateToGTFS } from './_Universal';

export class CalendarDate {
	service: string;
	date: Date;
	exception: CalendarDateException;

	constructor(init: CalendarDateValues);
	constructor(init: GTFSCalendarDateObject);
	constructor(init: CalendarDateValues | GTFSCalendarDateObject) {
		if ('service_id' in init) {
			this.service = init.service_id;
			this.date = new Date(init.date);
			this.exception = init.exception_type;
		} else {
			this.service = init.service;
			this.date = init.date;
			this.exception = init.exception;
		}
	}

	public toJSON(): GTFSCalendarDateObject {
		return {
			service_id: this.service,
			date: dateToGTFS(this.date),
			exception_type: this.exception
		};
	}

	public toString() {
		return `${this.service}_${dateToGTFS(this.date)}`;
	}
}

export enum CalendarDateException {
	Added = 1,
	Removed = 2
}

/** @deprecated Use CalendarDateException */
export const CalendarDateExcpetion = CalendarDateException;
export type CalendarDateExcpetion = CalendarDateException;

export interface GTFSCalendarDateObject {
	service_id: string;
	date: string;
	exception_type: CalendarDateException;
}

export interface CalendarDateValues {
	service: string;
	date: Date;
	exception: CalendarDateException;
}
