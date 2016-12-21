class Property {
	public constructor(name: string, attribute: any, isRate: boolean) {
		this.name = name;
		this.value = attribute.num;
		this.quality = attribute.name;
		this.isRate = isRate;
	}
	name: string;
	value: number;
	quality: string;
	isRate: boolean;
}


class Properties {
	constructor(level: number) {
		this.level = level;
	}
	level: number
	all: Property[] = [];
	order = [
		"atk",
		"hp",
		"def",
		"spd",
		"crit",
	]
	//
	//需要的属性有：
	//攻击属性
	//血量属性
	//防御属性
	//速度属性
	//暴击属性
	//星级质量
	//等级
	//英雄质量


	// getProDescription(_properties_enum: _properties) {
	// 	return  this.all[_properties_enum].getDescription;
	// }

	get atk() {
		var result = (100 + ((4 * this.all[_properties.atk].value) + (3 * this.all[_properties.Hero].value) + (12 * this.all[_properties.Star].value)) * this.level).toFixed(0);
		return Number(result);
	}

	get hp() {
		var result = (400 + ((35 * this.all[_properties.hp].value) + (25 * this.all[_properties.Hero].value) + (45 * this.all[_properties.Star].value)) * this.level).toFixed(0);
		return Number(result);
	}

	get def() {
		var result = (60 + ((1.3 * this.all[_properties.def].value) + (0.5 * this.all[_properties.Hero].value) + (1.5 * this.all[_properties.Star].value)) * this.level).toFixed(0);
		return Number(result);
	}

	get spd() {
		var result = (90 + (this.all[_properties.spd].value * 8 + this.all[_properties.Hero].value * this.all[_properties.Star].value)).toFixed(0);
		return Number(result);
	}
	get crit() {
		var result = 0;
		switch (this.all[_properties.crit].quality) {
			case "S":
				result = 10;
				break;

			case "A":
				result = 8;
				break;

			case "B":
				result = 5;
				break;

			default:
				result = 0;
				break;
		}
		return result;

	}

	Add(property: Property) {
		this.all.push(property);
	}
}

enum _properties {         //属性顺序
	atk = 0,
	hp = 1,
	def = 2,
	spd = 3,
	crit = 4,
	Star = 5,
	Hero = 6

}
