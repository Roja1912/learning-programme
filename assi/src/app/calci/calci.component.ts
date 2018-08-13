import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {
  public num1 :number;
  public num2 :number;
  public result :number;

  





  cal_Add(){
    
    this.result=this.num1+this.num2;
  }
  cal_Sub(){
    this.result=this.num1-this.num2;
  }
  cal_Multi(){
    this.result=this.num1*this.num2;
  }
  
  cal_Div(){
    
    this.result=this.num1/this.num2;
  }
  
}



