import {Room} from '../model/room.model'
import {State} from '@ngrx/store';
import {Store} from '@ngrx/store';
import * as RoomActions from '../actions/room.actions';
import {RoomDetailsActionTypes,RoomDetailsActions} from '../actions/room-details.actions';




const initialState :Room= {
    id:'123',
    roomNum:'123',
    price:'123',
    links:'123'
}

export function roomDetailsRed(state:any = [initialState],action:RoomDetailsActions){
switch(action.type){
    case RoomDetailsActionTypes.LOAD_ROOM_DETAILS:
        return [...state];
    default:
        return state;
}
  
}
export function roomReducer(state:Room[]=[initialState],action:RoomActions.Actions){
    switch(action.type){
        case RoomActions.ADD_ROOM:
            return [...state,action.payload]
        default:
            return state;

    }
}