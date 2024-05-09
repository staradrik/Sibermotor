import { product } from "./product.service";

export interface MongoConnectionService {
  initialiseMongoConnection():any;
  login(user: string, password: string):any;
  addProduct(barcode: string):Promise<string>;
  deleteProduct(barcode: string):Promise<string>;
  getProducts():Promise<product[]>;
  getProduct(barcode: string):Promise<product>;
}
