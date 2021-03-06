import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get(`${environment.BASE_URL}/product`);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${environment.BASE_URL}/product/${id}`);
  }

  getProductByCategoryId(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.BASE_URL}/product/category/${id}`);
  }
}