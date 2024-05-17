import { Injectable } from '@angular/core';
import { Product, productService } from '../../Core/Services/product.service';
import { ProductApiService } from '../Api/product-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService implements productService{

  productCode:string="";
  productComplet: any;

  constructor(private productApiService: ProductApiService) { }
  addProduct(product: Product): Promise<string> {
    return this.productApiService.addProduct(product);
  }
  deleteProduct(barcode: string): Promise<string> {
    return this.productApiService.deleteProduct(barcode);
  }
  getProducts(): Promise<Product[]> {
    return this.productApiService.getProducts();
  }
  getProduct(barcode: string): Promise<Product> {
    return this.productApiService.getProduct(barcode);
  }
}
