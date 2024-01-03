import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.localStorageService.clearLoggedInUser();
  }

  // LoginComponent
  onSubmit(): void {
    this.userService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          console.log('Login successful. User data:', response.data);
          this.localStorageService.setLoggedInUser(response.data); // Kullanıcıyı local storage'a kaydet
          console.log('After setting logged-in user:', this.localStorageService.getLoggedInUser());
          this.router.navigate(['/homepage']);
        } else {
          console.error('Login failed. Response:', response);
        }
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }

}
