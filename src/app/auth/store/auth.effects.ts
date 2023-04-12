import { Actions, ofType, createEffect } from "@ngrx/effects";

import * as AuthActions from './auth.actions'
import { switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AuthResponseData } from "../auth.service";
import { HttpClient } from "@angular/common/http";

export class AuthEffects {

    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http
            .post<AuthResponseData>(
                "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
                environment.firebaseAPIKey,
                {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true,
                }
            )
        })
    );
    constructor(private actions$: Actions, private http: HttpClient){}

}