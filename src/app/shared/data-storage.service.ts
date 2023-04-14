import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions'
//import { AuthService } from '../auth/auth.service';

import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    //private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        environment.recipeApi,
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  
}
