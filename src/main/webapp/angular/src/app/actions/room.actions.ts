import {Action} from '@ngrx/store';
import {Room} from '../model/room.model'

export const ADD_ROOM = '[Room] Add';
export const REMOVE_ROOM='[Room] Remove';

export class AddRoom implements Action{
   readonly type = ADD_ROOM;
   constructor(public payload:Room){

   }
}

export class RemoveRoom implements Action{
    readonly type = REMOVE_ROOM;
    constructor(public payload:number){
        
    }
 }

 export type Actions= AddRoom | RemoveRoom;