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

  recipes: any[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
    .subscribe(
      (response) => {
        console.log(response);
        this.recipes = response;
      },
      (error) => console.log(error)
    );
  }

}
