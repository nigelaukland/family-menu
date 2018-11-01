import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  constructor (private http: Http) {}
 
  // private recipes: Recipe[] = [
  //   new Recipe('Tandoori Tilapia', 'The recipe from James Martin', 'https://i.dailymail.co.uk/i/pix/2011/03/11/article-0-0D30A321000005DC-986_468x419.jpg')
  // ];

  getRecipes() {
    return this.http.get('http://192.168.0.30:50001/recipes')
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  storeRecipe(recipe: Recipe) {
    // default Content-Type is application/json
    return this.http.post('http://192.168.0.30:50001/recipes', recipe);
    // can add a {headers} object as a parameter to the http method
   }

} 