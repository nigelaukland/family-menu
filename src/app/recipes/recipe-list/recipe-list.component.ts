import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Recipe } from './../shared/recipe.model';
import { RecipeService } from './../shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: any[]

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
    .subscribe(
      (response) => {
        // const data = response.json();
        console.log(response);
        // console.log(this.recipes);
        // this.recipes[0] = {
        //   name: "me",
        //   description: "youtoo",
        //   imagePath: "some url"
        // };
        // var i;
        // for (i=0; i < data.length; i++) {
        //   this.recipes.push(
        //     {
        //       name: data[i].name,
        //       description: data[i].description,
        //       imagePath: data[i].imagePath
        //     }
        //   ); 
        // }
      },
      (error) => console.log(error)
    );
  }

}
