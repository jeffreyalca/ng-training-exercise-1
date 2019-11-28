"use strict";
exports.__esModule = true;
var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.prototype.setFilterBehavior = function (filterBehavior) {
        this._filterBehavior = filterBehavior;
    };
    SearchService.prototype.executeSearch = function (dataToFilter, searchTerm) {
        var newValues = this._filterBehavior.applyFilter(dataToFilter, searchTerm);
        return newValues;
    };
    return SearchService;
}());
exports.SearchService = SearchService;
