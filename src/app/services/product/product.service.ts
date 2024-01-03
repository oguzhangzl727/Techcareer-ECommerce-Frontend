import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:5860/product";
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(`${this.baseUrl}`);
    
  }
}
