import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

import {FormModel} from './../app.component'
import { FormBuilder, FormControl, Validators } from '@angular/forms';


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

@Input() data:FormModel;
@Output() dataChange=new EventEmitter();



@Output() screenchange=new EventEmitter<boolean>();
screen:boolean=true;
  
  states: State[] = [
    {value: 'karnataka-0', viewValue: 'Karnataka'},
    {value: 'andrapradesh-1', viewValue: 'Andrapradesh'},
    {value: 'tamilnadu-2', viewValue: 'Tamilnadu'}
  ];



  

  form;
  firstname:string;
  lastname:string;
  address1:string;
  address2:string;
  state:string;
  city:string;
  postalcode:string;

  constructor(
    private fb: FormBuilder
  ) { }

ngOnInit() {
 
  this.initForm();
  console.log(this.form)

}


onClickForward(){
  this.screenchange.emit(this.screen);
  this.dataChange.emit(this.form.value);
}


initForm() {
  this.form = this.fb.group({
    firstname: new FormControl(this.data.firstname, Validators.required),
    lastname: new FormControl(this.data.lastname,Validators.required),
    address1: new FormControl(this.data.address1,Validators.required),
    address2: new FormControl(this.data.address2,Validators.required),
    state: new FormControl(this.data.state,Validators.required),
    city: new FormControl(this.data.city,Validators.required),
    gender: new FormControl(this.data.gender,Validators.required)
    

  })
}


}
