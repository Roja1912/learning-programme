import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Serviceservice{
constructor(private http:HttpClient) {}
  public addData(data){
    const httpOptions ={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post("http://localhost:4009/users/add",{"data":data}, httpOptions)
  }


  public readData(name){
    return this.http.get(`http://localhost:4009/users/${name}`);
  }

  
    public updateData(name, data) {
    const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.patch(`http://localhost:4009/users/${name}`, 
    { "data": data }, httpOptions);
    }





    //Connection to delete Data
    public deleteData(name) {
    return this.http.delete(`http://localhost:4009/users/${name}`);
    }


}
 
