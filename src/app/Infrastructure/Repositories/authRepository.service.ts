import { Injectable } from '@angular/core';
import { AuthService, User } from '../../Core/Services/auth.service';
import { AuthApiService } from '../Api/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryService implements AuthService{

  constructor(private authApiService:AuthApiService) { }
  login(user: string, password: string): User {
    return this.authApiService.login(user, password);
  }
  logout(): void {
    this.authApiService.logout();
  }
}
