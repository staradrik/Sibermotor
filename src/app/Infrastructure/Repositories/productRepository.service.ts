import { Injectable } from '@angular/core';
import { product, productService } from '../../Core/Services/product.service';
import { ProductApiService } from '../Api/product-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService implements productService{

  constructor(private productApiService: ProductApiService) { }
  addProduct(barcode: string): void {
    this.productApiService.addProduct(barcode);
  }
  deleteProduct(barcode: string): void {
    this.productApiService.deleteProduct(barcode);
  }
  getProducts(): product[] {
    return this.productApiService.getProducts();
  }
  getProduct(barcode: string): product {
    return this.productApiService.getProduct(barcode);
  }
}
