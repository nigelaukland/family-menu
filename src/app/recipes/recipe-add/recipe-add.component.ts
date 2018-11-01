import { Component, OnInit } from '@angular/core';
import { NgForm } from '@Angular/forms';
import { RecipeService } from './../shared/recipe.service';
import { Recipe } from './../shared/recipe.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //recipe: new Recipe(form.form.value);
    console.log(form);
    var recipe = new Recipe(form.value.name, form.value.description, form.value.imagePath);
    this.recipeService.storeRecipe(recipe)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
