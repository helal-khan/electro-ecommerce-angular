import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      data => {
        console.log(data);
        this.products = data.data;
      },
      error => {
        alert(error.message);
      });
  }

  AddProduct(id: Number) {
    //this.cartService.AddProductToCart(id);
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

}
