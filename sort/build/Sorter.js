"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    // collection: number[];
    // adding the 'public' keyword  to constructor params eliminates need to assign variable inside of contructor
    function Sorter(collection /*todo*/) {
        var _this = this;
        this.collection = collection;
        this.mapString = function (string) {
            return string.split('').map(function (char) { return char.toUpperCase(); });
        };
        this.sort = function () {
            var length = _this.collection.length;
            var collection;
            if (typeof _this.collection === 'string') {
                collection = _this.mapString(_this.collection);
            }
            else {
                collection = _this.collection;
            }
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    if (_this.collection[j] > _this.collection[j + 1]) {
                        var tmp = _this.collection[j];
                        collection[j] = _this.collection[j + 1];
                        collection[j + 1] = tmp;
                    }
                }
            }
            return collection;
        };
        // this.collection = collection;
    }
    return Sorter;
}());
exports.Sorter = Sorter;
