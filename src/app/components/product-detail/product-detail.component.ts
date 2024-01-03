import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { CartService } from '../../services/cart/cart.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../../services/user/user.service';
import { User } from '../../model/user';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  imports: [NavbarComponent]
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;
  user:User|null=null;
  defaultUrl: string = "https://al.yb.com.tr/kantin/urunler/yok.png";

  constructor(private route: ActivatedRoute, private cartService: CartService, private userService: UserService,private localStorage:LocalStorageService) { }

  ngOnInit(): void {
    // Router state'inden veriyi alma
    this.user=this.localStorage.getLoggedInUser();
        console.log("init user: "+this.user?.user_id);
    this.product = history.state.product;
  }

  addToCart() {
    // CartService aracılığıyla ürünü sepete ekleme
    if (this.product) {
      // userService.loggedInUser?.user_id değeri null veya undefined ise, hata fırlat
      if (this.user?.user_id == null) {
        throw new Error("User ID is null or undefined.");
      }

      const productArray: Product[] = [this.product];
      this.cartService.addProductCart(productArray, this.user?.user_id, this.quantity).subscribe((response) => {
        console.log(response.data);
      },
      (error) => {
        console.error('CartAddError CartDetail:', error);
      });
    }
  }

  increaseQuantity() {
    // Miktarı artırma
    this.quantity++;
  }

  decreaseQuantity() {
    // Miktarı azaltma, minimum 1 olarak kontrol ediliyor
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
