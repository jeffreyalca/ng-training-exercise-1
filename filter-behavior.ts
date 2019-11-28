export interface FilterBehavior {
    applyFilter(dataToFilter, searchTerm): Array<any>;
}

export class BrandFilter implements FilterBehavior {
    public applyFilter(dataToFilter: Array<any>, searchTerm): Array<any> {
        return dataToFilter.filter((data) => {
            return data.name === searchTerm;
        });
    }
}

export class OrderFilter implements FilterBehavior {
    public applyFilter(dataToFilter: any, searchTerm: any): any[] {
        return dataToFilter.filter((data) => {
            return data.orderNumber === searchTerm || (data.lineItems[0] && data.lineItems[0].frame.fpc === searchTerm);
        })
    }
}