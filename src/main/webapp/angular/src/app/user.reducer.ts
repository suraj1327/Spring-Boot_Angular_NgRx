import { act } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {User} from '../app/user';
import { UserNewActions, UserNewActionTypes } from './user-new.actions';

export const userFeatureKey = 'usersState';

export interface State {
    users:User[],
    error:any
}

export const initialState: State = {
    users:[
    ],
    error:''
};

export function reducer(state = initialState, action: UserNewActions): State {
  switch (action.type) {
      case UserNewActionTypes.LoadUserNews:
        return {...state};
      case UserNewActionTypes.LoadUserNewsSuccess:
        return {...state,users:action.payload.data,error:''};
      case UserNewActionTypes.LoadUserNewsFailure:
        return {...state,users:[],error:action.payload.error}
    default:
      return state;
  }
}
