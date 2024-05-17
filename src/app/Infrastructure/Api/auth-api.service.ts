import { Injectable } from '@angular/core';
import { AuthService, User } from '../../Core/Services/auth.service';
import { MongoConnectionApiService } from './mongo-connection-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthService{

  constructor(private mongoConnectionApiService:MongoConnectionApiService) { }
  login(user: string, password: string): Promise<User> {
    return this.mongoConnectionApiService.login(user,password);
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
}
