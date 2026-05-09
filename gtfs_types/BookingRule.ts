export class BookingRule {
	id: string;
	bookingType: BookingType;
	priorNoticeDurationMin?: number;
	priorNoticeDurationMax?: number;
	priorNoticeLastDay?: number;
	priorNoticeLastTime?: string;
	priorNoticeStartDay?: number;
	priorNoticeStartTime?: string;
	priorNoticeServiceId?: string;
	message?: string;
	pickupMessage?: string;
	dropOffMessage?: string;
	phone?: string;
	infoUrl?: string | URL;
	bookingUrl?: string | URL;

	constructor(init: GTFSBookingRuleObject);
	constructor(init: BookingRuleValues);
	constructor(init: GTFSBookingRuleObject | BookingRuleValues) {
		if ("booking_rule_id" in init) {
			this.id = init.booking_rule_id;
			this.bookingType = init.booking_type;
			this.priorNoticeDurationMin = init.prior_notice_duration_min;
			this.priorNoticeDurationMax = init.prior_notice_duration_max;
			this.priorNoticeLastDay = init.prior_notice_last_day;
			this.priorNoticeLastTime = init.prior_notice_last_time;
			this.priorNoticeStartDay = init.prior_notice_start_day;
			this.priorNoticeStartTime = init.prior_notice_start_time;
			this.priorNoticeServiceId = init.prior_notice_service_id;
			this.message = init.message;
			this.pickupMessage = init.pickup_message;
			this.dropOffMessage = init.drop_off_message;
			this.phone = init.phone_number;
			this.infoUrl = init.info_url;
			this.bookingUrl = init.booking_url;
		} else {
			this.id = init.id;
			this.bookingType = init.bookingType;
			this.priorNoticeDurationMin = init.priorNoticeDurationMin;
			this.priorNoticeDurationMax = init.priorNoticeDurationMax;
			this.priorNoticeLastDay = init.priorNoticeLastDay;
			this.priorNoticeLastTime = init.priorNoticeLastTime;
			this.priorNoticeStartDay = init.priorNoticeStartDay;
			this.priorNoticeStartTime = init.priorNoticeStartTime;
			this.priorNoticeServiceId = init.priorNoticeServiceId;
			this.message = init.message;
			this.pickupMessage = init.pickupMessage;
			this.dropOffMessage = init.dropOffMessage;
			this.phone = init.phone;
			this.infoUrl = init.infoUrl;
			this.bookingUrl = init.bookingUrl;
		}
	}

	public toJSON(): GTFSBookingRuleObject {
		return {
			booking_rule_id: this.id,
			booking_type: this.bookingType,
			prior_notice_duration_min: this.priorNoticeDurationMin,
			prior_notice_duration_max: this.priorNoticeDurationMax,
			prior_notice_last_day: this.priorNoticeLastDay,
			prior_notice_last_time: this.priorNoticeLastTime,
			prior_notice_start_day: this.priorNoticeStartDay,
			prior_notice_start_time: this.priorNoticeStartTime,
			prior_notice_service_id: this.priorNoticeServiceId,
			message: this.message,
			pickup_message: this.pickupMessage,
			drop_off_message: this.dropOffMessage,
			phone_number: this.phone,
			info_url: this.infoUrl as string | undefined,
			booking_url: this.bookingUrl as string | undefined,
		};
	}

	public toString(): string {
		return this.id;
	}
}

export enum BookingType {
	RealTime = 0,
	SameDay = 1,
	PriorDay = 2
}

export interface GTFSBookingRuleObject {
	booking_rule_id: string;
	booking_type: BookingType;
	prior_notice_duration_min?: number;
	prior_notice_duration_max?: number;
	prior_notice_last_day?: number;
	prior_notice_last_time?: string;
	prior_notice_start_day?: number;
	prior_notice_start_time?: string;
	prior_notice_service_id?: string;
	message?: string;
	pickup_message?: string;
	drop_off_message?: string;
	phone_number?: string;
	info_url?: string;
	booking_url?: string;
}

interface BookingRuleValues {
	id: string;
	bookingType: BookingType;
	priorNoticeDurationMin?: number;
	priorNoticeDurationMax?: number;
	priorNoticeLastDay?: number;
	priorNoticeLastTime?: string;
	priorNoticeStartDay?: number;
	priorNoticeStartTime?: string;
	priorNoticeServiceId?: string;
	message?: string;
	pickupMessage?: string;
	dropOffMessage?: string;
	phone?: string;
	infoUrl?: string | URL;
	bookingUrl?: string | URL;
}
