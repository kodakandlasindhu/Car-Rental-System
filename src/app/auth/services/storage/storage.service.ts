import { Injectable } from '@angular/core';

const TOKEN ="token";
const USER="user";

/*

  static saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }

  static saveUser(user:any):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));
  }

  static getToken(){
    return window.localStorage.getItem(TOKEN);
  }

  static getUser(){
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;

    // return JSON.parse(localStorage.getItem(USER));
  }

  static getUserRole(): string{
    const user=this.getUser();
    if(user==null) return " ";
    return user.role;
  }

  static isAdminLoggedIn(): boolean{
    if(this.getToken()==null) return false;
    const role: string=this.getUserRole();
    return role=="ADMIN";
  }

  static isCustomerLoggedIn(): boolean{
    if(this.getToken()==null) return false;
    const role: string=this.getUserRole();
    return role=="CUSTOMER";
  }
  
  static logout(): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}

*/

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  static saveToken(token: string): void {
    if (this.isBrowser()) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  static saveUser(user: any): void {
    if (this.isBrowser()) {
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  static getUserId(): string{
    const user=this.getUser();
    if(user==null){ return '';}
    return user.id;
  }

  static getToken(): string | null {
    if (this.isBrowser()) {
      return window.localStorage.getItem(TOKEN);
    }
    return null;
  }

  static getUser(): any {
    if (this.isBrowser()) {
      const user = window.localStorage.getItem(USER);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  static getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : '';
  }

  static isAdminLoggedIn(): boolean {
    return this.getToken() !== null && this.getUserRole() === "ADMIN";
  }

  static isCustomerLoggedIn(): boolean {
    return this.getToken() !== null && this.getUserRole() === "CUSTOMER";
  }

  static logout(): void {
    if (this.isBrowser()) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.removeItem(USER);
    }
  }
}

