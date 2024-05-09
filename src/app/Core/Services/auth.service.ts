export interface AuthService {
  login(user: string, password:string):User;
  logout():void;
}
export interface User {
  user: String;
  password: String;
  role:Role
}
export enum Role {
  "Usuario",
  "Gerente",
  "Administrador"
}
