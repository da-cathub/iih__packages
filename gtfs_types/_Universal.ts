export const dateToGTFS = (date: Date) => `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;

/**
 * GTFS uses 0 and 1 to represent boolean values, but in TypeScript we can use
 * the native boolean type. This type is used to represent boolean values in
 * GTFS.
 *
 * `0 = false`
 * `1 = true`
 */
export type BooleanyValue = 0 | 1;

export enum CemvSupport {
	NoInformation = 0,
	Supported = 1,
	NotSupported = 2
}
