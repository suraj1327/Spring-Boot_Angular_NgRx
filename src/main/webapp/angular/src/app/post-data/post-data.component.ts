import { Component, OnInit } from '@angular/core';
import {Store} from'@ngrx/store';
import { from, Observable } from 'rxjs';
import { RoomState } from '../state/room.state';
import {Room } from '../model/room.model';
import * as RoomDetailsActions from '../actions/room-details.actions';
import { AppService } from '../app.service';


@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  addedRooms:Observable<Room[]>;
  messageFromService:string;
  constructor(private store:Store<RoomState>,private service:AppService) { 
    this.addedRooms = this.store.select('roomState');
  }



  ngOnInit() {
    this.service.currentMessage.subscribe(message=>this.messageFromService=message);
    this.store.dispatch(new RoomDetailsActions.LoadRoomDetails());
    this.store.select('roomState').subscribe(
      rooms => {
        console.log(rooms);
      }
    )
  
  }

}
