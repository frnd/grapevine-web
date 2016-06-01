 /**
 * PagedResource
 */
export class PagedResource<T> {
    content: T[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    numberOfElements: number;
    sort: any;
    size: number;
    number: number;
    
    constructor(parameters) {
        
    }
}