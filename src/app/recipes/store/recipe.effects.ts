import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as RecipeActions from "./recipe.actions";
import { map, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipe.model";
import { environment } from "src/environments/environment";
export class RecipeEffects {
  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.FETCH_RECIPES),
      switchMap((fetchAction) => {
        return this.http.get<Recipe[]>(environment.recipeApi);
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map((recipes) => {
        return new RecipeActions.SetRecipes(recipes);
      })
    )
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
