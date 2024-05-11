import { Injectable } from '@angular/core';
import { MongoConnectionService } from '../../Core/Services/mongoConnection';
import * as Realm from "realm-web";
import { Role, User } from '../../Core/Services/auth.service';
import { Product } from '../../Core/Services/product.service';
import { ProductDb } from '../../Core/Models/productDb.model';

@Injectable({
  providedIn: 'root'
})
export class MongoConnectionApiService implements MongoConnectionService {

  user: User = { user: "", password: "", role: Role.Usuario};
  app = new Realm.App({ id: "application-0-jpidxyl" });
  serviceName = "mongodb-atlas";
  dbName = "Sibermotor";
  collUser = "user";
  collProduct = "product";

  constructor() { }
  async initialiseMongoConnection() {
    // Create an anonymous credential
    const credentials = Realm.Credentials.anonymous();
    // Authenticate the user
    return await this.app.logIn(credentials);
  }
  async login(user: string, password: string) {
    await this.initialiseMongoConnection();
    const mongo = this.app.currentUser?.mongoClient(this.serviceName);
    const collection = mongo?.db(this.dbName).collection(this.collUser);
    var findResult;
    try {

      // Execute a FindOne in MongoDB
      findResult = await collection!.findOne(
        { name: user, password: password},
      );

      if(!findResult)
        throw new Error('El usuario no existe');

    } catch(err: any) {
      // return { error: err.message };
      console.log(err.message);
    }
    // return { result: findResult };
  }
  async addProduct(product: Product): Promise<string> {
    this.initialiseMongoConnection();
    const mongo = this.app.currentUser?.mongoClient(this.serviceName);
    const collection = mongo?.db(this.dbName).collection(this.collProduct);
    try {
      // Execute a deleteOne in MongoDB
      await collection!.findOne({idProduct: product.barcode,}).then(async (dataf) => {
        if (dataf != null)
          throw new Error('El producto ya existe');

        await collection!.insertOne(
          {
            idProduct: product.barcode,
            name: product.name,
            description: product.description,
            stock: product.stock,
            price: product.price
          },
        ).then(async (data) => {
          if (data == null)
            throw new Error('El producto no se ha podido agregar');
        });
      });
    } catch(err: any) {
      // console.log(err.message);
      return "Error: " + err.message;
    }
    return "Operacion exitosa";
  }
  async deleteProduct(barcode: string): Promise<string> {
    this.initialiseMongoConnection();
    const mongo = this.app.currentUser?.mongoClient(this.serviceName);
    const collection = mongo?.db(this.dbName).collection(this.collProduct);
    try {
      // Execute a deleteOne in MongoDB
      await collection!.findOne({idProduct: barcode,}).then(async (dataf) => {
        if (dataf == null)
          throw new Error('El producto no existe');

        await collection!.deleteOne(
          {
            idProduct: barcode
          },
        ).then(async (data) => {
          if (data == null)
            throw new Error('El producto no se ha podido borrar');
        });
      });
    } catch(err: any) {
      // console.log(err.message);
      return "Error: " + err.message;
    }
    return "Operacion exitosa";
  }
  async getProducts(): Promise<Product[]> {
    var products: Product[] = []
    this.initialiseMongoConnection();
    const mongo = this.app.currentUser?.mongoClient(this.serviceName);
    const collection = mongo?.db(this.dbName).collection(this.collProduct);
    try {
      // Execute a deleteOne in MongoDB
      await collection!.find().then(async (data: ProductDb[]) => {
        if (!data){
          throw new Error('El producto no existe');
        }
        data.forEach((dataA:ProductDb) => {
          let product = {
            name: dataA.name,
            description: dataA.description,
            stock: dataA.stock,
            price: dataA.price,
            barcode: dataA.idProduct
          }
          products.push(product);
        });

      });
    } catch(err: any) {
      throw new Error(err.message);
    }
    return products;
  }
  async getProduct(barcode: string): Promise<Product> {
    var product: Product = {
      name: '',
      description: '',
      stock: 0,
      price: 0,
      barcode: ''
    }
    this.initialiseMongoConnection();
    const mongo = this.app.currentUser?.mongoClient(this.serviceName);
    const collection = mongo?.db(this.dbName).collection(this.collProduct);
    try {
      // Execute a deleteOne in MongoDB
      await collection!.findOne({idProduct: barcode,}).then(async (dataf) => {

        if (!dataf){
          throw new Error('El producto no existe');
        }
        product = {
          name: dataf.name,
          description: dataf.description,
          stock: dataf.stock,
          price: dataf.price,
          barcode: dataf.idProduct
        }
      });
    } catch(err: any) {
      // console.log(err.message);
      product.description = "Error: " + err.message;
      return product;
    }
    return product;
  }
}
