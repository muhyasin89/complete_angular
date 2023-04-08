import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
  shoppingList: ShoppingState;
}

export interface ShoppingState {
  ingredients: Ingredient[],
  editIngredient: Ingredient,
  editedIngredientIndex: number;
}

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(
  state: ShoppingState = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state, ingredients: [...state.ingredients, ...action.payload]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      //get update record 
      const ingredient = state.ingredients[action.payload.index];
      const updateIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };

      const updatedIngredients = [...state.ingredients];

      updatedIngredients[action.payload.index] = updateIngredient;

      return {
        ...state,
        ingredients: updatedIngredients
      }

    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ig, IgIndex) => {
            return IgIndex !== action.payload;
        })
      }

    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editIngredient: action.payload,
        editedIngredientIndex: {...state.ingredients[action.payload]}
      }
    case ShoppingListActions.STOP_EDIT:
      
    default:
      return state;
  }
}
