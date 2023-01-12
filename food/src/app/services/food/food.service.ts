import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { foods } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/tag';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAllFoodByTag(tag: string): foods[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))


  }
  getAllTags(): tag[] {
    return [
      { name: 'All', count: 12 },

    ]
  }
  
  getFoodById(id: number): foods {
    return this.getAll().find(foods => foods.id == id)!
      ;
  }
  getAll(): foods[] {
    return [
      {
        id: 1,
        satr: 4.0,
        price: 50,
        name: 'Sac carré minimaliste à rabat',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/1.jpeg',
        disponible: 'dispo',
        origins: ['dispo'],
      },
      {
        id: 2,
        price: 9.5,
        name: 'Sac carré mini matelassé chaîne',
        favorite: false,
        satr: 4.0,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/2.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      },
      {
        id: 3,
        satr: 4.0,
        price: 50,
        name: 'Sac carré en relief de crocodile verrou tournant à rabat',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/3.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      },
      {
        id: 4,
        satr: 4.0,
        price: 50,
        name: 'Sac carré minimaliste à rabat',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/4.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      },
      {
        id: 5,
        price: 50,
        satr: 4.0,
        name: 'Sac carré minimaliste à rabat',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/5.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      },
      {
        id: 6,
        satr: 4.0,
        price: 50,
        name: 'Sac fourre-tout en canevas minimalr ',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/6.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      },
      {
        id: 7,
        satr: 4.0,
        price: 50,
        name: 'Sac carré mini à détail foulard à rabat',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/7.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      },
      {
        id: 8,
        satr: 4.0,
        price: 16,
        name: 'Sac carré minimaliste à double poign',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/8.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      },
      {
        id: 9,
        price: 50,
        satr: 4.0,
        name: 'Sac fourre-tout de épaule en suédine à',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/9.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      }, {
        id: 10,
        satr: 4.0,
        price: 50,
        name: 'Sac baguette minimaliste en similic',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/10.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      }, {
        id: 11,
        price: 50,
        satr: 4.0,
        name: 'Sac carré à couture',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/11.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      }, {
        id: 12,
        price: 50,
        satr: 4.0,
        name: 'Sac fourre-tout minimaliste',
        favorite: false,
        tags: ['fastfood', 'Pizza'],
        imageUrl: '/assets/12.jpeg',
        disponible: 'dispo',
        origins: ['SHIEN'],
      }
    ];
  }
  
  getAllProducts(): Observable<any>{
    return this.http.get(`${environment.baseUrl}`)
  }
}
