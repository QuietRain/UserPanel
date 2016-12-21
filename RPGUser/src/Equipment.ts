class Equipment {    //装备
	properties:Properties;
	jewels: Jewel[] = []; //宝石
	constructor(properties: Properties) {
		this.properties = properties;
	}

	Addjewel(jewel: Jewel) {
		this.jewels.push(jewel);
	}



}