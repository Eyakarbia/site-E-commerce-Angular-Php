import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isLoggin = false
  constructor(private http: HttpClient) {
    if (localStorage.getItem("tokenUser")) {
      this.isLoggin = true
    } else {
      this.isLoggin = false
    }
  }
  host = "http://localhost/projet";
  public login(data: any) {
    return this.http.post<any>(this.host + '/login.php', data);
  }

}
