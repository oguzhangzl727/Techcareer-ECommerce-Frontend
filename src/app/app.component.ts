import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductService } from './services/product/product.service';
import { CartService } from './services/cart/cart.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LocalStorageService } from './services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,
    HttpClientModule,LoginComponent,FormsModule,HomeComponent,NavbarComponent,CartComponent,ProductDetailComponent],
  providers: [UserService,ProductService,CartService,LocalStorageService
    ],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce-frontend';
}
