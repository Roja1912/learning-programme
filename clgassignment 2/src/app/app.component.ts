import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  screen:Boolean=true;
  constructor (){ }
  changescreen(e){
             this.screen=!e;
  }
  formData:FormModel=new FormModel();
  formData1:FormModel1=new FormModel1();



  


}
export class FormModel{
  firstname:string;
  lastname:string;
  address1:string;
  address2:string;
  city:string;
  state:string;
  gender:string;
}

export class FormModel1{
  tenthmarks:string;
    pucmarks:string;
    graduate:string;
    postgraduate:string;
  
   
  }
