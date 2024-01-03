// local-storage.service.ts
import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorageKey = 'cartProducts';
  private userKey = 'loggedInUser';

  constructor() {}

  getCartProducts(): Product[] {
    const cartProductsString = localStorage.getItem(this.localStorageKey);
    return cartProductsString ? JSON.parse(cartProductsString) : [];
  }

  setCartProducts(data: Product[] ): void {
    const cartProductsString = JSON.stringify(data);
    localStorage.setItem(this.localStorageKey, cartProductsString);
  }
  

  clearCart(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  getLoggedInUser(): User | null {
    const userString = localStorage.getItem(this.userKey);
    return userString ? JSON.parse(userString) : null;
  }

  setLoggedInUser(user: User): void {
    const userString = JSON.stringify(user);
    localStorage.setItem(this.userKey, userString);
  }

  clearLoggedInUser(): void {
    localStorage.removeItem(this.userKey);
  }
}
