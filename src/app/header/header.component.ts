import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faUser = faUser;
  faCartPlus = faCartPlus;
  faSearch = faSearch;
  constructor(private router: Router){}

  
  navigateToAboutPage() {
    this.router.navigate(['/about']);
  }
  goTologin(){
    this.router.navigate(['/login']);
  }
  
}


