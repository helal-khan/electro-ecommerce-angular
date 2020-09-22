import {Product} from './product.model';

export interface Cart {
    total: number,
    data: [{
        product: Product,
        quantity: number
    }];
}

export interface UserCart{
    total: number,
    product: [{
        id: number,
        quantity: number
    }]
}