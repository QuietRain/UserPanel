class Hero {
	isInTeam: boolean;
	equipments: Equipment[] = []; //装备
	properties: Properties;//属性组
	constructor(isInTeam: boolean, properties: Properties) {
		this.isInTeam = isInTeam;
		this.properties = properties;
	}


	AddEquipment(equipment: Equipment) {
		this.equipments.push(equipment);
	}
}


var HeroQuality = [    //英雄品质
	{ name: "N", num: 1.4 },
	{ name: "R", num: 1.6 },
	{ name: "SR", num: 1.8 },
	{ name: "SSR", num: 2.0 }
]
enum Heroenum {     //英雄品质
	N = 0,
	R = 1,
	SR = 2,
	SSR = 3
}
var StarQuality = [          //星级品质
	{ name: "ONE", num: 0.8 },
	{ name: "TWO", num: 1.0 },
	{ name: "THRE", num: 1.2 },
	{ name: "FOUR", num: 1.5 },
	{ name: "FIFE", num: 2.0 },
	{ name: "SIX", num: 2.8 }

]
enum Starenum {          //星级品质
	ONE = 0,
	TWO = 1,
	THREE = 2,
	FOUR = 3,
	FIFE = 4,
	SIX = 5,
}
var AttributeQuality = [          //属性品质
	{ name: "S", num: 2.8 },
	{ name: "A", num: 2.3 },
	{ name: "B", num: 1.8 },
	{ name: "C", num: 1.4 },
	{ name: "D", num: 1.0 }
]
enum Attributeenum {          //属性品质
	S = 0,
	A = 1,
	B = 2,
	C = 3,
	D = 4
}

var EquipmentQuality = [          //属性品质
	{ name: "S", num: 1.4 },
	{ name: "A", num: 1.15 },
	{ name: "B", num: 0.9 },
	{ name: "C", num: 0.7 },
	{ name: "D", num: 0.5 }
]



var JewelQuality = [          //属性品质
	{ name: "S", num: 0.7 },
	{ name: "A", num: 0.55 },
	{ name: "B", num: 0.45 },
	{ name: "C", num: 0.35 },
	{ name: "D", num: 0.25 }
]