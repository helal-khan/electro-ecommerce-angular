import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products: Product[] = [];

  constructor(private http: HttpClient) { }

  getOrderById(id: number):Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.BASE_URL}/order/${id}`);
  }
}

interface Product{
  id: Number;
  name: String;
  description: String;
  image: String;
  price: Number;
  quantity: Number;
}
