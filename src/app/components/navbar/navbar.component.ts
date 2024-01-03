import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isProductsActive: boolean = true;
  isCartActive: boolean = false;

  constructor(private router: Router,private localstorage:LocalStorageService,private userService:UserService) {}


  goToProducts() {
    console.log("goToProducts çalıştı!");
    this.router.navigate(['/homepage']);
    this.isProductsActive = true;
    this.isCartActive = false;
  }

  goToCart() {
    console.log("goToCart çalıştı!");
    this.router.navigate(['/cart']); 
    this.isProductsActive = false;
    this.isCartActive = true;
  }

  exit() {
    this.localstorage.clearLoggedInUser();
    this.router.navigate(['/login']);
  }
}