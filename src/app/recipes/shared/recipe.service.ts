import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  constructor (private http: Http) {}
 
   getRecipes() {
    return this.http.get('http://menu-api.nigelaukland.com/recipes')
    .map(
      (response: Response) => {
        const data = response.json();
        var recipes = data.map(function(data) {
          return {name: data.name, description: data.description, imagePath: data.imagePath};
        })
        return recipes;
      },
      (error) => console.log(error)
    );
  }

  storeRecipe(recipe: Recipe) {
    // default Content-Type is application/json
    return this.http.post('http://menu-api.nigelaukland.com/recipes', recipe);
    // can add a {headers} object as a parameter to the http method
   }

} 