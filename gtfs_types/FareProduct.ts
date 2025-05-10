export class FareProduct {
    id: string;
    name?: string;
    fareMedia?: string;
	fareCategory?: string;
    amount: number;
    currency: string;

    constructor(init: {
        id: string;
        name?: string;
        fareMedia?: string;
		fareCategory?: string;
        amount: number;
        currency: string;
    }) {
        this.id = init.id;
        this.name = init.name;
		this.fareCategory = init.fareCategory;
        this.fareMedia = init.fareMedia;
        this.amount = init.amount;
        this.currency = init.currency;
    }

    public toJSON() {
        return {
            "fare_product_id": this.id,
            "fare_product_name": this.name ?? "",
            "fare_media_id": this.fareMedia ?? "",
			"fare_category_id": this.fareCategory ?? "",
            "amount": this.amount,
            "currency": this.currency
        }
    }

    public toString() {
        return `${this.id}_${this.fareMedia}`;
    }
}

export interface GTFSFareProductObject {
	fare_product_id: string;
	fare_product_name?: string;
	fare_category_id?: string;
	fare_media_id: string;
	amount: number;
	currency: string;
}