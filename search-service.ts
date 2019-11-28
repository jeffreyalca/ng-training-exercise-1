import { FilterBehavior } from "./filter-behavior";

export class SearchService {
    private _filterBehavior: FilterBehavior;

    public setFilterBehavior(filterBehavior: FilterBehavior) {
        this._filterBehavior = filterBehavior;
    }

    public executeSearch(dataToFilter: Array<any>, searchTerm): Array<any> {
        let newValues = this._filterBehavior.applyFilter(dataToFilter, searchTerm);

        return newValues;
    }
}