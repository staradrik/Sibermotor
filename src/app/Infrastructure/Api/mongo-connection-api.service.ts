import { Injectable } from '@angular/core';
import { MongoConnectionService } from '../../Core/Services/mongoConnection';
import * as Realm from "realm-web";
import { User, Role } from '../../Core/Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MongoConnectionApiService implements MongoConnectionService {

  user: User = { user: "", password: "", role: Role.Usuario};
  constructor() { }
  async initialiseMongoConnection() {
    const app = new Realm.App({ id: "application-0-jpidxyl" });
    // Create an anonymous credential
    const credentials = Realm.Credentials.anonymous();
    // Authenticate the user
    return await app.logIn(credentials);
  }
  async login(user: string, password: string) {
    if (!this.user)
        this.user = this.initialiseMongoConnection();
    return await this.user.functions.GetMovies();
  }
  addProduct() {
    throw new Error('Method not implemented.');
  }
  deleteProduct() {
    throw new Error('Method not implemented.');
  }
  getProduct() {
    throw new Error('Method not implemented.');
  }
  getProducts() {
    throw new Error('Method not implemented.');
  }
}
