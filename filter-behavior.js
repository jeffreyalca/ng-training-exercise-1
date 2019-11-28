"use strict";
exports.__esModule = true;
var BrandFilter = /** @class */ (function () {
    function BrandFilter() {
    }
    BrandFilter.prototype.applyFilter = function (dataToFilter, searchTerm) {
        return dataToFilter.filter(function (data) {
            return data.name === searchTerm;
        });
    };
    return BrandFilter;
}());
exports.BrandFilter = BrandFilter;
var OrderFilter = /** @class */ (function () {
    function OrderFilter() {
    }
    OrderFilter.prototype.applyFilter = function (dataToFilter, searchTerm) {
        return dataToFilter.filter(function (data) {
            return data.orderNumber === searchTerm || (data.lineItems[0] && data.lineItems[0].frame.fpc === searchTerm);
        });
    };
    return OrderFilter;
}());
exports.OrderFilter = OrderFilter;
