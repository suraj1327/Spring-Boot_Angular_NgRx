import { Injectable } from '@angular/core';
import { Http,Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Room} from '../app/app.component';
@Injectable()
export class AppService {

  constructor(public http:Http){

  }
public rooms:any;

baseUrl:string='http://localhost:8080';

getAllRooms():Observable<Room[]>{
  return this.http.get(this.baseUrl+'/room/reservation/v1?checkin=2019-03-13&&checkout=2019-03-14')
  .map((response:Response)=>{
       return response.json().content;
  });
}

reserveRoom(data:any):Observable<any>{
  //let headers = new Headers({'Content-Type':'application/json'});
  //let defaultOptions = new RequestOptions({headers:headers});
  return this.http.post(this.baseUrl+'/room/reservation/v1',data)
  .map((response:Response)=>{
    return response.json().content;
  });
}



}
