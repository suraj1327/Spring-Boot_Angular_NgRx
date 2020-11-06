import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Room } from '../model/room.model';
import {Store} from'@ngrx/store';
import * as RoomActions from '../actions/room.actions'
import { RoomState } from '../state/room.state';
import * as W from '../demo_webworker.js';

@Component({
  selector: 'app-hotel-data',
  templateUrl: './hotel-data.component.html',
  styleUrls: ['./hotel-data.component.css']
})
export class HotelDataComponent implements OnInit {

 roomSearch:FormGroup;
 public submitted=false;
 rooms:Room[];
 currentCheckinVal:string;
 currentCheckoutVal:string;
 posts:any[];
 messageRecieved:string;


 constructor(private appService:AppService, private store:Store<RoomState>){
    
 }

 addRoom(id:string,roomNum:string,price:string,links:string){
   this.appService.changeMessage("New message to service");
    this.store.dispatch(new RoomActions.AddRoom({'id':id,'roomNum':roomNum,'price':price,'links':links}));
 }

ngOnInit(){
  this.appService.currentMessage.subscribe(message=>this.messageRecieved = message);

  
  this.fetchUsersInformation();
   
 this.roomSearch = new FormGroup({
   checkin:new FormControl('', Validators.required),
   checkout:new FormControl('', Validators.required)
 });

 this.roomSearch.valueChanges.subscribe(valChange=>{
  this.currentCheckinVal=valChange.checkin
  this.currentCheckoutVal=valChange.checkout
 })
 
}

onSubmit({value:RoomsSearch,valid:boolean}){
   this.appService.getAllRooms().subscribe(rooms=>
    this.rooms=rooms,
     err=>{
       console.log(err);
   });
   ;
}

fetchUsersInformation(){
  this.appService.getAllPostsInformation().subscribe(postsArray=>{
    postsArray.forEach((post,index) => {
      if(index===0){
      return this.appService.fetchUserInformation(post.userId).subscribe(users => {
              post.name =users[0].name;
          });
        }
    });
         this.posts=postsArray;

  }
  )
}

reserveRoom(roomNum:string){
  var roomRequest= {
    'id':roomNum,
    'checkin':this.currentCheckinVal,
    'checkout':this.currentCheckoutVal
  }
   console.log(roomRequest);
  this.appService.reserveRoom(roomRequest).subscribe((response:Response)=>{

    console.log("res",response);
  })

}

}


export interface RoomsSearch{
  checkin:string,
  checkout:string
}



