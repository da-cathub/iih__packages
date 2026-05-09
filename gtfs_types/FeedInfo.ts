import { dateToGTFS } from './_Universal';

export class FeedInfo {
	publisherName: string;
	publisherUrl: string;
	lang: string;
	defaultLang?: string;
	start?: Date;
	end?: Date;
	version?: string;
	contactEmail?: string;
	contactUrl?: string;

	constructor(init: FeedInfoValues);
	constructor(init: GTFSFeedInfoObject);
	constructor(init: FeedInfoValues | GTFSFeedInfoObject) {
		if ('feed_publisher_name' in init) {
			this.publisherName = init.feed_publisher_name;
			this.publisherUrl = init.feed_publisher_url;
			this.lang = init.feed_lang;
			this.defaultLang = init.default_lang;
			this.start = init.feed_start_date ? new Date(init.feed_start_date) : undefined;
			this.end = init.feed_end_date ? new Date(init.feed_end_date) : undefined;
			this.version = init.feed_version;
			this.contactEmail = init.feed_contact_email;
			this.contactUrl = init.feed_contact_url;
		} else {
			this.publisherName = init.publisherName;
			this.publisherUrl = init.publisherUrl;
			this.lang = init.lang;
			this.defaultLang = init.defaultLang;
			this.start = init.start;
			this.end = init.end;
			this.version = init.version;
			this.contactEmail = init.contactEmail;
			this.contactUrl = init.contactUrl;
		}
	}

	public toJSON(): GTFSFeedInfoObject {
		return {
			feed_publisher_name: this.publisherName,
			feed_publisher_url: this.publisherUrl,
			feed_lang: this.lang,
			default_lang: this.defaultLang,
			feed_start_date: this.start ? dateToGTFS(this.start) : undefined,
			feed_end_date: this.end ? dateToGTFS(this.end) : undefined,
			feed_version: this.version,
			feed_contact_email: this.contactEmail,
			feed_contact_url: this.contactUrl
		};
	}

	public toString() {
		return this.publisherName;
	}
}

export interface GTFSFeedInfoObject {
	feed_publisher_name: string;
	feed_publisher_url: string;
	feed_lang: string;
	default_lang?: string;
	feed_start_date?: string;
	feed_end_date?: string;
	feed_version?: string;
	feed_contact_email?: string;
	feed_contact_url?: string;
}

export interface FeedInfoValues {
	publisherName: string;
	publisherUrl: string;
	lang: string;
	defaultLang?: string;
	start?: Date;
	end?: Date;
	version?: string;
	contactEmail?: string;
	contactUrl?: string;
}
