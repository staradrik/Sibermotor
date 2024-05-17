import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { Role, User } from '../../../Core/Services/auth.service';
import { AuthRepositoryService } from '../../../Infrastructure/Repositories/authRepository.service';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    ToolbarModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private messageService: MessageService, private router: Router,
    private authRepositoryService: AuthRepositoryService
  ){}
  user: User = {
    user: "",
    password: "",
    role: Role.Usuario
  }
  async login(){
    this.user = await this.authRepositoryService.login(this.user.user, this.user.password)
    if (this.user.role === Role.Error){
      this.messageService.add({severity:'error', summary:"Error", detail:"No se encuentra usuario"});
      this.user.user = "";
      this.user.password = "";
      return;
    }
    this.router.navigate([`/products`]);
  }
}
