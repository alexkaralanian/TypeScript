"use strict";
var Sorter = /** @class */ (function () {
    // collection: number[];
    // adding the 'public' keyword  to constructor params eliminates need to assign variable inside of contructor
    function Sorter(collection) {
        var _this = this;
        this.collection = collection;
        this.sort = function () {
            var length = _this.collection.length;
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    if (_this.collection[j] > _this.collection[j + 1]) {
                        var tmp = _this.collection[j];
                        _this.collection[j] = _this.collection[j + 1];
                        _this.collection[j + 1] = tmp;
                    }
                }
            }
            return _this.collection;
        };
        this.collection = collection;
    }
    return Sorter;
}());
var sorter = new Sorter([99, 1, 9, -4, 22]);
console.log(sorter.sort());
