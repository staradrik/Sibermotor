export interface MongoConnectionService {
  initialiseMongoConnection():any;
  login(user: string, password: string):any;
  addProduct():any;
  deleteProduct():any;
  getProduct():any;
  getProducts():any;
}
