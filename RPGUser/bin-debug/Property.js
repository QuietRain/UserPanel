var Property = (function () {
    function Property(name, attribute, isRate) {
        this.name = name;
        this.value = attribute.num;
        this.quality = attribute.name;
        this.isRate = isRate;
    }
    var d = __define,c=Property,p=c.prototype;
    return Property;
}());
egret.registerClass(Property,'Property');
var Properties = (function () {
    function Properties(level) {
        this.all = [];
        this.order = [
            "atk",
            "hp",
            "def",
            "spd",
            "crit",
        ];
        this.level = level;
    }
    var d = __define,c=Properties,p=c.prototype;
    d(p, "atk"
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
        ,function () {
            var result = (100 + ((4 * this.all[_properties.atk].value) + (3 * this.all[_properties.Hero].value) + (12 * this.all[_properties.Star].value)) * this.level).toFixed(0);
            return Number(result);
        }
    );
    d(p, "hp"
        ,function () {
            var result = (400 + ((35 * this.all[_properties.hp].value) + (25 * this.all[_properties.Hero].value) + (45 * this.all[_properties.Star].value)) * this.level).toFixed(0);
            return Number(result);
        }
    );
    d(p, "def"
        ,function () {
            var result = (60 + ((1.3 * this.all[_properties.def].value) + (0.5 * this.all[_properties.Hero].value) + (1.5 * this.all[_properties.Star].value)) * this.level).toFixed(0);
            return Number(result);
        }
    );
    d(p, "spd"
        ,function () {
            var result = (90 + (this.all[_properties.spd].value * 8 + this.all[_properties.Hero].value * this.all[_properties.Star].value)).toFixed(0);
            return Number(result);
        }
    );
    d(p, "crit"
        ,function () {
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
    );
    p.Add = function (property) {
        this.all.push(property);
    };
    return Properties;
}());
egret.registerClass(Properties,'Properties');
var _properties;
(function (_properties) {
    _properties[_properties["atk"] = 0] = "atk";
    _properties[_properties["hp"] = 1] = "hp";
    _properties[_properties["def"] = 2] = "def";
    _properties[_properties["spd"] = 3] = "spd";
    _properties[_properties["crit"] = 4] = "crit";
    _properties[_properties["Star"] = 5] = "Star";
    _properties[_properties["Hero"] = 6] = "Hero";
})(_properties || (_properties = {}));
//# sourceMappingURL=Property.js.map