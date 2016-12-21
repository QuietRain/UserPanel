var PropertiesDisplayFacory = (function () {
    function PropertiesDisplayFacory() {
    }
    var d = __define,c=PropertiesDisplayFacory,p=c.prototype;
    p.getDesciption = function (property) {
        return property.name + " : " + property.quality;
    };
    p.createHero = function (hero, stage) {
        var x = 720;
        var y = 218;
        for (var i = 0; i < hero.properties.order.length; i++) {
            var p = hero.properties[hero.properties.order[i]];
            if (p) {
                var tf = new egret.TextField();
                if (hero.properties.all[i].isRate) {
                    tf.text = this.getDesciption(hero.properties.all[i]) + " " + p + "%";
                }
                else {
                    tf.text = this.getDesciption(hero.properties.all[i]) + " " + p;
                }
                tf.x = x;
                tf.y = y;
                tf.textColor = 0;
                y = y + 48;
                stage.addChild(tf);
            }
        }
    };
    p.createEquitment = function (equipments, stage) {
        var x = 950;
        var y = 218;
        for (var i = 0; i < User.user.heroes[0].properties.order.length; i++) {
            var result = 0;
            for (var _i = 0, equipments_1 = equipments; _i < equipments_1.length; _i++) {
                var equip = equipments_1[_i];
                result = result + equip.properties[equip.properties.order[i]];
                for (var _a = 0, _b = equip.jewels; _a < _b.length; _a++) {
                    var jewel = _b[_a];
                    result = result + jewel.properties[jewel.properties.order[i]]; //结果加上装备和宝石的第i个属性
                }
            }
            var tf = new egret.TextField();
            if (User.user.heroes[0].properties.all[i].isRate) {
                tf.text = " + " + result + " %";
            }
            else {
                tf.text = " + " + result + " ";
            }
            tf.x = x;
            tf.y = y;
            tf.textColor = 0;
            y = y + 48;
            stage.addChild(tf);
        }
    };
    p.createPanel = function (properties, stage) {
        var x = 500;
        var y = 300;
        var container = new egret.DisplayObjectContainer();
        var panel = new egret.Shape();
        panel.graphics.beginFill(0X000000, 0.8);
        panel.graphics.drawRect(x, y, 400, 400);
        panel.graphics.endFill();
        stage.addChild(panel);
        var count = 0;
        for (var i = 0; i < properties.order.length; i++) {
            var p = properties[properties.order[i]];
            if (p) {
                var tf = new egret.TextField();
                if (properties.all[i].isRate) {
                    tf.text = this.getDesciption(properties.all[i]) + " " + p + "%";
                }
                else {
                    tf.text = this.getDesciption(properties.all[i]) + " " + p;
                }
                tf.x = x;
                tf.y = y;
                // tf.textColor = 0;
                y = y + 48;
                container.addChild(tf);
            }
        }
        stage.addChild(container);
        panel.touchEnabled = true;
        panel.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            stage.removeChild(container);
            stage.removeChild(panel);
        }, this);
    };
    return PropertiesDisplayFacory;
}());
egret.registerClass(PropertiesDisplayFacory,'PropertiesDisplayFacory');
//# sourceMappingURL=ProperitiesDisplayFacory.js.map