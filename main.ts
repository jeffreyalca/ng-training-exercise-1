import { SearchService } from "./search-service";
import { BrandFilter, OrderFilter } from "./filter-behavior";
import { brands } from "./brands";
import { orders } from "./orders";

let brandSearchService = new SearchService();

let brandFilter = new BrandFilter();

brandSearchService.setFilterBehavior(brandFilter);

let filteredBrands = brandSearchService.executeSearch(brands, 'OAKLEY');

console.log(filteredBrands);

let orderFilter = new OrderFilter();

brandSearchService.setFilterBehavior(orderFilter);

let filteredOrders = brandSearchService.executeSearch(orders, 'FR10RIG7');

filteredOrders.push(brandSearchService.executeSearch(orders, '99010253136980'));

console.log(filteredOrders);