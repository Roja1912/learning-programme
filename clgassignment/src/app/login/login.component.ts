import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface State {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  states: State[] = [
    {value: 'karnataka-0', viewValue: 'Karnataka'},
    {value: 'andrapradesh-1', viewValue: 'Andrapradesh'},
    {value: 'tamilnadu-2', viewValue: 'Tamilnadu'}
  ];


  firstname:string;
  lastname:string;
  address1:string;
  address2:string;
  state:string;
  city:string;
  postalcode:string;

  constructor(
    private router: Router
  ) { }

ngOnInit() {
  this.firstname=sessionStorage.getItem('firstname');
  this.lastname=sessionStorage.getItem('lastname');
  this.address1=sessionStorage.getItem('address1');
  this.address2=sessionStorage.getItem('address2');
  this.state=sessionStorage.getItem('state');
  this.city=sessionStorage.getItem('city');
  this.postalcode=sessionStorage.getItem('postalcode');
 



}


next() {
  this.router.navigate(['register'])
}
onKeyFirstName(e){
  sessionStorage.setItem('firstname',e.target.value);
}
onKeyLastName(e){
  sessionStorage.setItem('lastname',e.target.value);
}
onKeyAddress1(e){
  sessionStorage.setItem('address1',e.target.value);
}
onKeyAddress2(e){
  sessionStorage.setItem('address2',e.target.value);
}
onKeyCity(e){
  sessionStorage.setItem('city',e.target.value);
}
// onKeyState(e){
//   sessionStorage.setItem('state',e.target.value);
// }
// onKeyPostalCode(e){
//   sessionStorage.setItem('',e.target.value);
// }

}
