import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isHidden: boolean = true;
	isCollapsed: Boolean = true;
	id: string;

  constructor(private router: Router,public authService: AuthService) { 
  	
  	this.id = localStorage.getItem('token');
	if(this.id == "admin"){
		this.isHidden = false;
	}else{
		this.isHidden = true;
	}
  }

  ngOnInit() {
  }


  logout(): void {
    console.log("Logout"); 
    this.isHidden = true;
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
