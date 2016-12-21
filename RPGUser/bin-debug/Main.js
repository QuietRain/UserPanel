//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    p.createGameScene = function () {
        var _this = this;
        //正片开始
        var main_screen = this.createBitmapByName("属性文件_jpg");
        this.addChild(main_screen);
        var user = new User(15);
        var atk = new Property("攻击", AttributeQuality[Attributeenum.S], false);
        var hp = new Property("生命", AttributeQuality[Attributeenum.B], false);
        var def = new Property("防御", AttributeQuality[Attributeenum.B], false);
        var spd = new Property("速度", AttributeQuality[Attributeenum.S], false);
        var crit = new Property("暴击", AttributeQuality[Attributeenum.S], true);
        var Hero_Quality = new Property("式神品质", HeroQuality[Heroenum.SR], false);
        var Star_Quality = new Property("星级品质", StarQuality[Starenum.FIFE], false);
        var properties = new Properties(34);
        properties.Add(atk);
        properties.Add(hp);
        properties.Add(def);
        properties.Add(spd);
        properties.Add(crit);
        properties.Add(Star_Quality);
        properties.Add(Hero_Quality);
        //装备属性
        var eatk = new Property("攻击", EquipmentQuality[Attributeenum.S], false);
        var ehp = new Property("生命", EquipmentQuality[Attributeenum.S], false);
        var edef = new Property("防御", EquipmentQuality[Attributeenum.B], false);
        var espd = new Property("速度", EquipmentQuality[Attributeenum.C], false);
        var ecrit = new Property("暴击", EquipmentQuality[Attributeenum.C], true);
        var equipproperties = new Properties(15);
        equipproperties.Add(eatk);
        equipproperties.Add(ehp);
        equipproperties.Add(edef);
        equipproperties.Add(espd);
        equipproperties.Add(ecrit);
        equipproperties.Add(Star_Quality);
        equipproperties.Add(Hero_Quality);
        //宝石属性
        var jatk = new Property("攻击", JewelQuality[Attributeenum.A], false);
        var jhp = new Property("生命", JewelQuality[Attributeenum.B], false);
        var jdef = new Property("防御", JewelQuality[Attributeenum.B], false);
        var jspd = new Property("速度", JewelQuality[Attributeenum.B], false);
        var jcrit = new Property("暴击", JewelQuality[Attributeenum.S], true);
        var jewelproperties = new Properties(3);
        jewelproperties.Add(jatk);
        jewelproperties.Add(jhp);
        jewelproperties.Add(jdef);
        jewelproperties.Add(jspd);
        jewelproperties.Add(jcrit);
        jewelproperties.Add(Star_Quality);
        jewelproperties.Add(Hero_Quality);
        var Factory = new PropertiesDisplayFacory();
        var hero1 = new Hero(true, properties);
        var equip = new Equipment(equipproperties);
        var jewel = new Jewel(jewelproperties);
        equip.Addjewel(jewel);
        hero1.AddEquipment(equip);
        user.AddHero(hero1);
        Factory.createHero(hero1, this);
        Factory.createEquitment(hero1.equipments, this);
        var equip_bitmap = this.createBitmapByName("屠龙宝刀_png");
        equip_bitmap.scaleX = 0.4;
        equip_bitmap.scaleY = 0.4;
        equip_bitmap.x = 700;
        equip_bitmap.y = 430;
        this.addChild(equip_bitmap);
        equip_bitmap.touchEnabled = true;
        equip_bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("被点击了e");
            Factory.createPanel(equip.properties, _this);
        }, this);
        var jewel_bitmap = this.createBitmapByName("宝石_png");
        jewel_bitmap.scaleX = 0.2;
        jewel_bitmap.scaleY = 0.2;
        jewel_bitmap.x = 900;
        jewel_bitmap.y = 450;
        this.addChild(jewel_bitmap);
        jewel_bitmap.touchEnabled = true;
        jewel_bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("被点击了j");
            Factory.createPanel(jewel.properties, _this);
        }, this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    p.startAnimation = function (result) {
        var self = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = [];
        for (var i = 0; i < result.length; i++) {
            textflowArr.push(parser.parser(result[i]));
        }
        var textfield = self.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var lineArr = textflowArr[count];
            self.changeDescription(textfield, lineArr);
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, self);
        };
        change();
    };
    /**
     * 切换描述内容
     * Switch to described content
     */
    p.changeDescription = function (textfield, textFlow) {
        textfield.textFlow = textFlow;
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//装饰器
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        console.log("cache!!!!!!!!!!");
        return getter.apply(this);
    };
    return desc;
};
//# sourceMappingURL=Main.js.map