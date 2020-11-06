import {Action} from '@ngrx/store';
import { Room } from '../model/room.model';

export enum RoomDetailsActionTypes{
 ROOM_DETAILS_FETCHED = '[roomDetails] fetched',
 ROOM_DETAILS_FAILED  = '[roomDetails] failed',
 LOAD_ROOM_DETAILS = '[roomDetails] load'
}

export class LoadRoomDetails implements Action{
    readonly type=RoomDetailsActionTypes.LOAD_ROOM_DETAILS;
}

export class RoomDetailsFetched implements Action{
    readonly type = RoomDetailsActionTypes.ROOM_DETAILS_FETCHED;
    constructor(private payload:any){

    }
}

export class RoomDetailsFailed implements Action{
    readonly type = RoomDetailsActionTypes.ROOM_DETAILS_FAILED;
    constructor(private error:any){

    }
}

export type RoomDetailsActions = LoadRoomDetails | RoomDetailsFetched | RoomDetailsFailed;