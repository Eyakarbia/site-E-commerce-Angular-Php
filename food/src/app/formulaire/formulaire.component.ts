import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  title='blog';
  myFunction(){
    alert("Votre commande est bien reussir");
  }
  public user: User =new User();

  constructor(private httpclient:HttpClient) { 
  }

  ngOnInit(): void {
    
  }
public saveData(registerForm:NgForm){
  console.log(registerForm.form);
  console.log('valeurs:',JSON.stringify(registerForm.value) )
  console.log('hello');

  const formData = new FormData(); 
  formData.append("nom", registerForm.value.lastName);
  formData.append("prenom", registerForm.value.FirstName);
  formData.append("email", registerForm.value.email);
  formData.append("adresse", registerForm.value.form);
  formData.append("codeposte", registerForm.value.codepost);
  
  const  message = this.httpclient.post("http://localhost/projet/add.php",formData);
  message.subscribe()



}

}

