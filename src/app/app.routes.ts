import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'login', component: LoginComponent },
    {path: 'homepage', component: HomeComponent },
    {path: 'cart', component: CartComponent },
    {path: 'product-detail', component: ProductDetailComponent },
];