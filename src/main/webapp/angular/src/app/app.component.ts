import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { AppService } from './app.service';

import {User } from '../app/user';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../app/user-new.actions';
import * as fromUser from '../app/user.selectors';
import * as W from './demo_webworker.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private service:AppService, private store:Store<User>) { }
  usersList:User[];
  errorMessage:string;
  user$=this.service.getUserState();
  userName:string;
  myForm:FormGroup;
  sampleData = new myTemplateForm();
  onSubmit(form){
    console.log(this.myForm.value);
  }

    submitForm() {
      console.table(this.sampleData);

    
  }
  ngOnInit(){
  
    this.myForm=new FormGroup({
      'username':new FormControl('Suraj',Validators.maxLength(5))
    });
    this.myForm.valueChanges.subscribe(valChange=>{
      this.userName=valChange.checkin
     })
    var userId='1';
    this.store.dispatch(new UserActions.LoadUserNews());
    this.store.pipe(select(fromUser.getUsers)).subscribe((usersList)=>{
         this.usersList=usersList;
    })

    this.store.pipe(select(fromUser.getError)).subscribe((error)=>{
      this.errorMessage=error;
 }) 

    this.service.fetchListOfUsersBehavior(userId).subscribe(
      userList=>{
        console.log('list',userList);
         // this.usersList= userList;
      },
      error=>{
         this.errorMessage =error.message;

      
    }) 
  }

  count=0;
  startCounter(){
    this.count=this.count+1;
    document.getElementById("result").innerHTML=this.count.toString();
  }

  
/* startWebWorker(){
  var w;
  if(typeof Worker !=undefined){
    w=new Worker(W);
  }
  w.onMessage =event=>{
    document.getElementById("result").innerHTML=event.data;
  }
  
} */
}
export class myTemplateForm {
  sampleValue: string;
}