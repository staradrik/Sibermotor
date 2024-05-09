import { Injectable } from '@angular/core';
import { product, productService } from '../../Core/Services/product.service';
import { MongoConnectionApiService } from './mongo-connection-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService implements productService{

  constructor(private mongoConnectionApiService: MongoConnectionApiService) { }
  addProduct(barcode: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
  deleteProduct(barcode: string): Promise<string> {
    return this.mongoConnectionApiService.deleteProduct(barcode);
  }
  getProducts(): Promise<product[]> {
    throw new Error('Method not implemented.');
  }
  getProduct(barcode: string): Promise<product> {
    throw new Error('Method not implemented.');
  }
}
