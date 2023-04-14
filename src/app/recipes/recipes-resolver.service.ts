import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import {Actions, ofType} from '@ngrx/effects'

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import * as RecipeActions from './store/recipe.actions'
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
   
    private recipesService: RecipeService,
    private store:Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      // return this.dataStorageService.fetchRecipes();
      this.store.dispatch(new RecipeActions.FetchRecipes())
      return this.actions$.pipe(
        ofType(RecipeActions.SET_RECIPES),
        take(1)
      )
    } else {
      return recipes;
    }
  }
}
