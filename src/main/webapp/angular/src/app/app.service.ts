import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import {BehaviorSubject, Observable,throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
import { Room } from './model/room.model';
import {User} from '../app/user';
@Injectable()
export class AppService {



  public serviceSubject = new BehaviorSubject("Service sends this message");
   currentMessage = this.serviceSubject.asObservable();
  constructor(public http:HttpClient){

  }
public rooms:any;

public changeMessage(message){
  this.serviceSubject.next(message);
}


public handleError(err:HttpErrorResponse){
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}
private userSubject:BehaviorSubject<User> =new BehaviorSubject({ 'id':'','name':'','email':'',username:''});
 

fetchListOfUsersBehavior(userId:any):Observable<any>{
  let user:User = this.userSubject.value;
  var url=`https://jsonplaceholder.typicode.com/users?id=${userId}`;
  return this.http.get(url)
  .pipe(map(response=>{
    console.log('response',response);
    user = {...user,
          username:response[0]['username'],
          id:response[0].id,
          email:response[0].email,
          name:response[0].name};
    this.userSubject.next(user)
  }))

}

fetchListOfUsers(userId:any):Observable<any>{
  var url=`https://jsonplaceholder.typicode.com/users?id=${userId}`;
  return this.http.get(url)
  .pipe(map(response=>response))

}

private quantity=0;
baseUrl:string='http://localhost:8080';



public getUserState():Observable<User>{
  return this.userSubject.asObservable();

}

getAllRooms():Observable<any>{
  return this.http.get(this.baseUrl+'/room/reservation/v1?checkin=2019-03-13&&checkout=2019-03-14')
  .pipe(map((response:Response)=>{
       return response;
  }))
}

fetchUserInformation(userId:any):Observable<any>{
  return this.http.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
  .pipe(map((response:Response)=>{
    return response;
  }))
}

getAllPostsInformation():Observable<any>{
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
   .pipe(map((response:Response)=>{
     return response;
   }));
   //.catch((error:any)=>{
   //  return Observable.throw(new Error( error + 'Server Error'));
   //}));

}

reserveRoom(data:any):Observable<any>{
  //let headers = new Headers({'Content-Type':'application/json'});
  //let defaultOptions = new RequestOptions({headers:headers});
  return this.http.post(this.baseUrl+'/room/reservation/v1',data)
  .pipe(map((response:Response)=>{
    return response ;
  }));
}

get():Promise<[]>{
  return Promise.resolve([]);
}



}
