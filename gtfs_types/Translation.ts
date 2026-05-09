export class Translation {
	tableName: TranslationTable;
	fieldName: string;
	language: string;
	translation: string;
	recordId?: string;
	recordSubId?: string;
	fieldValue?: string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	lang?: string;
	transId?: string;

	constructor(init: GTFSTranslationObject);
	constructor(init: TranslationValues);
	constructor(init: GTFSTranslationObject | TranslationValues) {
		if ("table_name" in init && !("tableName" in init)) {
			this.tableName = init.table_name as TranslationTable;
			this.fieldName = init.field_name;
			this.language = init.language;
			this.translation = init.translation;
			this.recordId = init.record_id;
			this.recordSubId = init.record_sub_id;
			this.fieldValue = init.field_value;
			this.lang = init.lang;
			this.transId = init.trans_id;
		} else {
			const v = init as TranslationValues;
			this.tableName = v.tableName;
			this.fieldName = v.fieldName;
			this.language = v.language;
			this.translation = v.translation;
			this.recordId = v.recordId;
			this.recordSubId = v.recordSubId;
			this.fieldValue = v.fieldValue;
			this.lang = v.lang;
			this.transId = v.transId;
		}
	}

	public toJSON(): GTFSTranslationObject {
		return {
			table_name: this.tableName,
			field_name: this.fieldName,
			language: this.language,
			translation: this.translation,
			record_id: this.recordId,
			record_sub_id: this.recordSubId,
			field_value: this.fieldValue,
			lang: this.lang,
			trans_id: this.transId
		};
	}

	public toString(): string {
		return `${this.tableName}.${this.fieldName} [${this.language}]`;
	}
}

export enum TranslationTable {
	Agency = 'agency',
	Stops = 'stops',
	Routes = 'routes',
	Trips = 'trips',
	StopTimes = 'stop_times',
	Pathways = 'pathways',
	Levels = 'levels',
	FeedInfo = 'feed_info',
	Attributions = 'attributions'
}

export interface GTFSTranslationObject {
	table_name: TranslationTable;
	field_name: string;
	language: string;
	translation: string;
	record_id?: string;
	record_sub_id?: string;
	field_value?: string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	lang?: string;
	trans_id?: string;
}

export interface TranslationValues {
	tableName: TranslationTable;
	fieldName: string;
	language: string;
	translation: string;
	recordId?: string;
	recordSubId?: string;
	fieldValue?: string;

	//! Google Transit-supported extensions in static feeds
	// @see https://developers.google.com/transit/gtfs/reference
	lang?: string;
	transId?: string;
}
