import { dateToGTFS } from "./_Univeral";

export class CalendarDate {

    service: string;
    date: Date;
    exception: CalendarDateExcpetion;

    constructor(init: {
        service: string;
        date: Date;
        exception: CalendarDateExcpetion;
    }) {
        this.service = init.service
        this.date = init.date
        this.exception = init.exception
    }

    public toJSON() {
        return {
            service_id: this.service,
            date: dateToGTFS(this.date),
            exception_type: this.exception
        }
    }
}

export enum CalendarDateExcpetion {
    Added = 1,
    Removed = 2
}

export interface GTFSCalendarDateObject {
	service_id: string;
	date: string;
	exception_type: CalendarDateExcpetion;
}