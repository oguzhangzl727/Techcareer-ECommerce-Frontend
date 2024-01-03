import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../model/user';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent,RouterModule,CommonModule]
})
export class HomeComponent implements OnInit{
    products: Product[] = [];
    addProducts:Product[]=[];
    user:User|null=null;
    defaultUrl:String="https://al.yb.com.tr/kantin/urunler/yok.png";
    constructor(private productService:ProductService,private cartService:CartService,private userService:UserService,private router:Router,private localstorage:LocalStorageService){

    }
    ngOnInit(): void {
        this.user=this.localstorage.getLoggedInUser();
        console.log("giris yapan kullanıcı:",this.user);
        console.log("init user: "+this.user?.user_id);
        this.getProducts();
        
    }


    getProducts(){
        this.productService.getAllProducts().subscribe(
            (response) => {
                this.products=response.data;
                console.log(this.products);
                console.log(response.success)
                
            });
    }


    addToCart(product:Product) {
        console.log('click button:', this.localstorage.getLoggedInUser());
  this.addProducts=[];
  this.addProducts=[product]
  console.log(this.addProducts);
  if (this.user?.user_id) {
    
    // Eğer this.user?.id tanımlıysa
    this.cartService.addProductCart(this.addProducts, this.user.user_id,1).subscribe(
        (response) => {
        console.log(response.data);
      },
      (error) => {
        console.error('CartAddError Homepage:', error);
        console.log("error detail", error.error)
      });
  } else {
    console.error('User ID is undefined.');
  }
      }

      

      goToProductDetail(product: Product) {
        // Yönlendirme işlemi ve veri gönderme
        this.router.navigate(['/product-detail'], {
          state: { product: product }
        });
      }
    
}
