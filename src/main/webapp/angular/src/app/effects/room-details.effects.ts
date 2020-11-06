import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as roomDetailsActions from '../actions/room-details.actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AppService } from '../app.service';
import { mergeMap,catchError,map} from 'rxjs/Operators';


@Injectable()
export class RoomDetailsEffects {

  constructor(private actions$: Actions,private appService:AppService) {}

  @Effect()
  loadRoomDetails$ : Observable<any> = this.actions$.pipe(
    ofType(roomDetailsActions.RoomDetailsActionTypes.LOAD_ROOM_DETAILS),
    mergeMap(
      action=>this.appService.getAllRooms().pipe(map(rooms=>{new roomDetailsActions.RoomDetailsFetched({roomDetails:rooms})})),
      catchError(err=>of(new roomDetailsActions.RoomDetailsFailed({error:Error})))
    )
    )
}
