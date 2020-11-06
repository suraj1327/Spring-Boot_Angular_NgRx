import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {merge, Observable,of} from 'rxjs';
import * as UserNewActions from '../app/user-new.actions';
import {mergeMap,map,catchError} from 'rxjs/operators';
import { AppService } from './app.service';






@Injectable()
export class UserEffects {



  constructor(private actions$: Actions, private service:AppService) {}

 @Effect()
 loadUsers$:Observable<Action> =this.actions$.pipe(
  //filter the actions  into the actions whose type string are passed to it
  ofType(UserNewActions.UserNewActionTypes.LoadUserNews),
  mergeMap(
    action=> this.service.fetchListOfUsers(1).pipe(
      map(users=>new UserNewActions.LoadUserNewsSuccess({data:users}),
      catchError(err=>of(new UserNewActions.LoadUserNewsFailure({error:err}))))
    )
  )
 )
}


