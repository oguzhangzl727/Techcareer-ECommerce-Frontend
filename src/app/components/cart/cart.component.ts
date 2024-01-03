import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { User } from '../../model/user';
import { UserService } from '../../services/user/user.service';
import { Product } from '../../model/product';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent,RouterModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
confirmCart() {
throw new Error('Method not implemented.');
}
  user:User|null=null;
  cartProducts: Product[] = [];
defaultUrl:String="https://al.yb.com.tr/kantin/urunler/yok.png";
totalAmount: number = 0;

  constructor( private cartService:CartService,private userService:UserService,private localstorage:LocalStorageService
    ){}

    ngOnInit(): void {
      this.cartProducts=this.localstorage.getCartProducts();
      this.user=this.localstorage.getLoggedInUser();
        console.log("init user: "+this.user?.user_id);
        this.getCartProducts();
      
  }

  getCartProducts(){
    if (this.user?.user_id) {
    this.cartService.getAllCartProducts(this.user?.user_id).subscribe((response) => {
      console.log(response.data);
      this.localstorage.setCartProducts(response.data)
      this.tutarHesapla();
    },
    (error) => {
      console.error('CartAddError Homepage:', error);
      console.log("error detail", error.error)
    });
  }
  else{
    console.error('User ID is undefined.');
  }

}


tutarHesapla() {
  this.totalAmount = this.cartProducts.reduce((total, product) => {
    if (product?.price && product?.quantity) {
      return total + (product.price * product.quantity);
    } else {
      console.log("quantity ve price yok");
      return 0;
    }
    
  }, 0);
}
}
