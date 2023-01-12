import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('tokenUser')
    this.apiService.isLoggin=false
    this.router.navigate(['/login'])
  }

}
