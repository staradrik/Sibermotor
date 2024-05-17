import { User } from "./auth.service";
import { Product} from "./product.service";

export interface MongoConnectionService {
  initialiseMongoConnection():any;
  login(user: string, password: string):Promise<User>;
  addProduct(product: Product):Promise<string>;
  deleteProduct(barcode: string):Promise<string>;
  getProducts():Promise<Product[]>;
  getProduct(barcode: string):Promise<Product>;
}
