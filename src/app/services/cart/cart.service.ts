import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/product';
import { ListResponseModel } from '../../model/listResponseModel';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { ShoppingCart } from '../../model/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl = "http://localhost:5860/shopping-cart";
  constructor(private http: HttpClient,private userService:UserService) { }

  getAllCartProducts(id:number): Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(`${this.baseUrl}/getcartitems/${id}`);
    
  }

  addProductCart(products: Product[],id:number,artis:number): Observable<ListResponseModel<ShoppingCart>> {
    return this.http.post<ListResponseModel<ShoppingCart>>(`${this.baseUrl}/addproductscart/${id}/${artis}`, products);
  }

}
