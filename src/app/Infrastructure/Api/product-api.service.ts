import { Injectable } from '@angular/core';
import { product, productService } from '../../Core/Services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService implements productService{

  constructor() { }
  addProduct(barcode: string): void {
    throw new Error('Method not implemented.');
  }
  deleteProduct(barcode: string): void {
    throw new Error('Method not implemented.');
  }
  getProducts(): product[] {
    throw new Error('Method not implemented.');
  }
  getProduct(barcode: string): product {
    throw new Error('Method not implemented.');
  }
}
