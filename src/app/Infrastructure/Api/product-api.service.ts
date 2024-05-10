import { Injectable } from '@angular/core';
import { Product, productService } from '../../Core/Services/product.service';
import { MongoConnectionApiService } from './mongo-connection-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService implements productService{

  constructor(private mongoConnectionApiService: MongoConnectionApiService) { }
  addProduct(product: Product): Promise<string> {
    return this.mongoConnectionApiService.addProduct(product);
  }
  deleteProduct(barcode: string): Promise<string> {
    return this.mongoConnectionApiService.deleteProduct(barcode);
  }
  getProducts(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  getProduct(barcode: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
