export interface AuthService {
  login(user: string, password:string):Promise<User>;
  logout():void;
}
export interface User {
  user: string;
  password: string;
  role:Role
}
export enum Role {
  "Usuario",
  "Gerente",
  "Administrador",
  "Error"
}
