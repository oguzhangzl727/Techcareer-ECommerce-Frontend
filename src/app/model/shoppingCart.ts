import { Product } from "./product";
import { User } from "./user";

export interface ShoppingCart {
    user_id: number;
    user: User; 
    products: Product[]; 
  }