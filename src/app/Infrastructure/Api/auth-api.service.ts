import { Injectable } from '@angular/core';
import { AuthService, User } from '../../Core/Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthService{

  constructor() { }
  login(user: string, password: string): User {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
}
