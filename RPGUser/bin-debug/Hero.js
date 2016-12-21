var Hero = (function () {
    function Hero(isInTeam, properties) {
        this.equipments = []; //装备
        this.isInTeam = isInTeam;
        this.properties = properties;
    }
    var d = __define,c=Hero,p=c.prototype;
    p.AddEquipment = function (equipment) {
        this.equipments.push(equipment);
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var HeroQuality = [
    { name: "N", num: 1.4 },
    { name: "R", num: 1.6 },
    { name: "SR", num: 1.8 },
    { name: "SSR", num: 2.0 }
];
var Heroenum;
(function (Heroenum) {
    Heroenum[Heroenum["N"] = 0] = "N";
    Heroenum[Heroenum["R"] = 1] = "R";
    Heroenum[Heroenum["SR"] = 2] = "SR";
    Heroenum[Heroenum["SSR"] = 3] = "SSR";
})(Heroenum || (Heroenum = {}));
var StarQuality = [
    { name: "ONE", num: 0.8 },
    { name: "TWO", num: 1.0 },
    { name: "THRE", num: 1.2 },
    { name: "FOUR", num: 1.5 },
    { name: "FIFE", num: 2.0 },
    { name: "SIX", num: 2.8 }
];
var Starenum;
(function (Starenum) {
    Starenum[Starenum["ONE"] = 0] = "ONE";
    Starenum[Starenum["TWO"] = 1] = "TWO";
    Starenum[Starenum["THREE"] = 2] = "THREE";
    Starenum[Starenum["FOUR"] = 3] = "FOUR";
    Starenum[Starenum["FIFE"] = 4] = "FIFE";
    Starenum[Starenum["SIX"] = 5] = "SIX";
})(Starenum || (Starenum = {}));
var AttributeQuality = [
    { name: "S", num: 2.8 },
    { name: "A", num: 2.3 },
    { name: "B", num: 1.8 },
    { name: "C", num: 1.4 },
    { name: "D", num: 1.0 }
];
var Attributeenum;
(function (Attributeenum) {
    Attributeenum[Attributeenum["S"] = 0] = "S";
    Attributeenum[Attributeenum["A"] = 1] = "A";
    Attributeenum[Attributeenum["B"] = 2] = "B";
    Attributeenum[Attributeenum["C"] = 3] = "C";
    Attributeenum[Attributeenum["D"] = 4] = "D";
})(Attributeenum || (Attributeenum = {}));
var EquipmentQuality = [
    { name: "S", num: 1.4 },
    { name: "A", num: 1.15 },
    { name: "B", num: 0.9 },
    { name: "C", num: 0.7 },
    { name: "D", num: 0.5 }
];
var JewelQuality = [
    { name: "S", num: 0.7 },
    { name: "A", num: 0.55 },
    { name: "B", num: 0.45 },
    { name: "C", num: 0.35 },
    { name: "D", num: 0.25 }
];
//# sourceMappingURL=Hero.js.map