var Equipment = (function () {
    function Equipment(properties) {
        this.jewels = []; //宝石
        this.properties = properties;
    }
    var d = __define,c=Equipment,p=c.prototype;
    p.Addjewel = function (jewel) {
        this.jewels.push(jewel);
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map