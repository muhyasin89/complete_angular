// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginApi: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6EL7KboMDQKZtczZE51zrgau1UYosI-0",
  signUpApi: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6EL7KboMDQKZtczZE51zrgau1UYosI-0",
  recipeApi: "https://ng-course-recipe-book-5c97b-default-rtdb.firebaseio.com/recipes.json"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
