import { Action } from '@ngrx/store';
import { User } from '../app/user';

export enum UserNewActionTypes {
  LoadUserNews = '[UserNew] Load UserNews',
  LoadUserNewsSuccess = '[UserNew] Load UserNews Success',
  LoadUserNewsFailure = '[UserNew] Load UserNews Failure',
}

export class LoadUserNews implements Action {
  readonly type = UserNewActionTypes.LoadUserNews;
}

export class LoadUserNewsSuccess implements Action {
  readonly type = UserNewActionTypes.LoadUserNewsSuccess;
  constructor(public payload: { data: User[] }) { }
}

export class LoadUserNewsFailure implements Action {
  readonly type = UserNewActionTypes.LoadUserNewsFailure;
  constructor(public payload: { error: string }) { }
}

export type UserNewActions = LoadUserNews | LoadUserNewsSuccess | LoadUserNewsFailure;

