import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:any
  constructor(private service:ApiService, private  router:Router) { }

  ngOnInit(): void {
  }
  user:any
 
  public ngSubmit(f:any){
    
    this.service.login(f.value).subscribe({next:(response:any)=>{
        for (var i=0; i<response.length; i++)
        {
          if (response[i].email==f.value.nom && response[i].password==f.value.pass){
          localStorage.setItem("tokenUser",response[i].id)
          this.service.isLoggin=true
          this.router.navigate(["/home"])
        }
          else{
            this.errorMessage="invalid email and password"
            
          }
        }
    
    
}})
      
      
  }
  
    
      
  }
  


