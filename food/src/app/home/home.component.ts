import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: foods[] = [];
  constructor(private fs: FoodService, private route: ActivatedRoute, private http: HttpClient) {

  }

  products!: foods[]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else if (params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag'])
      else
        this.getProducts()
      // this.foods = this.fs.getAll();
    })

  }
  addcart() {


    // formData.append("", registerForm.value.price);
    // formData.append("me", registerForm.value.imageUrl);
    // formData.append("type", registerForm.value.satr);
    // formData.append("to", registerForm.value.favorite);
    // formData.append("from", registerForm.value.nom+);

    // const  cart = this.http.post("http://localhost/projet/add.php",formData);
    // cart.subscribe()
  }

  getProducts() {
    this.fs.getAllProducts().subscribe((data) => {
      console.log(data)
      this.foods = data
    })
  }

}
