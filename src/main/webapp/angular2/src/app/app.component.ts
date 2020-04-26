import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { AppService } from './app.service';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 roomSearch:FormGroup;
 public submitted=false;
 rooms:Room[];
 currentCheckinVal:string;
 currentCheckoutVal:string;


 constructor(private appService:AppService){

 }

ngOnInit(){
  this.roomSearch =new FormGroup({
    checkin:new FormControl(''),
    checkout:new FormControl('')
  });

   const reserVationValueChanges=this.roomSearch.valueChanges;
   reserVationValueChanges.subscribe(valChange=>{
     this.currentCheckinVal=valChange.checkin,
     this.currentCheckoutVal=valChange.checkout
   })

 
}

onSubmit({value,valid}:{value:RoomsSearch,valid:boolean}){
   this.appService.getAllRooms().subscribe(
     rooms=>this.rooms=rooms,
     err=>{
       console.log(err);
   });
   ;
}

reserveRoom(roomNum:string){
  var roomRequest= {
    'id':roomNum,
    'checkin':this.currentCheckinVal,
    'checkout':this.currentCheckoutVal
  }

  this.appService.reserveRoom(roomRequest).subscribe((response:Response)=>{
    console.log("res",response);
  })

}
}


export interface RoomsSearch{
  checkin:string,
  checkout:string
}


export interface Room{
  id:string,
  roomNum:string,
  price:string,
  links:string

}
