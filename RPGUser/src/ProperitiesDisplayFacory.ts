
class PropertiesDisplayFacory {

	getDesciption(property: Property) {//传入一个属性组
		return property.name + " : " + property.quality;

	}

	createHero(hero: Hero, stage: egret.DisplayObjectContainer) {

		var x = 720;
		var y = 218;
		for (var i = 0; i < hero.properties.order.length; i++) {
			var p = hero.properties[hero.properties.order[i]];
			if (p) {
				var tf = new egret.TextField();
				if (hero.properties.all[i].isRate) {
					tf.text = this.getDesciption(hero.properties.all[i]) + " " + p + "%";
				} else {
					tf.text = this.getDesciption(hero.properties.all[i]) + " " + p;
				}
				tf.x = x;
				tf.y = y;
				tf.textColor = 0;
				y = y + 48;
				stage.addChild(tf);
			}
		}
	}

	createEquitment(equipments: Equipment[], stage: egret.DisplayObjectContainer) {
		var x = 950;
		var y = 218;
		for (var i = 0; i < User.user.heroes[0].properties.order.length; i++) {           //遍历属性
			var result = 0;
			for (let equip of equipments) {      //遍历装备
				result = result + equip.properties[equip.properties.order[i]];
				for (let jewel of equip.jewels) {   //遍历宝石
					result = result + jewel.properties[jewel.properties.order[i]];    //结果加上装备和宝石的第i个属性
				}
			}
			var tf = new egret.TextField();
			if (User.user.heroes[0].properties.all[i].isRate) {
				tf.text = " + " + result + " %";
			} else {
				tf.text = " + " + result + " ";
			}
			tf.x = x;
			tf.y = y;
			tf.textColor = 0;
			y = y + 48;
			stage.addChild(tf);


		}
	}


	createPanel(properties: Properties, stage: egret.DisplayObjectContainer) {
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
				} else {
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
		panel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

			stage.removeChild(container);

			stage.removeChild(panel);
		}, this)
	}

}