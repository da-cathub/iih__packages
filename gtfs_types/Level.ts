export class Level {
	id: string;
	index: number;
	name?: string;

	constructor(init: GTFSLevelObject);
	constructor(init: LevelValues);
	constructor(init: GTFSLevelObject | LevelValues) {
		if ("level_id" in init) {
			this.id = init.level_id;
			this.index = init.level_index;
			this.name = init.level_name;
		} else {
			this.id = init.id;
			this.index = init.index;
			this.name = init.name;
		}
	}

	public toJSON(): GTFSLevelObject {
		return {
			level_id: this.id,
			level_index: this.index,
			level_name: this.name,
		};
	}

	public toString(): string {
		return `Level ${this.id} ${this.name ?? ""} (${this.index})`;
	}
}

export interface GTFSLevelObject {
	level_id: string;
	level_index: number;
	level_name?: string;
}

interface LevelValues {
	id: string;
	index: number;
	name?: string;
}
