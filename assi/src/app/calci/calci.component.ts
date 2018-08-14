import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {
  public num1 :number;
  public num2 :number;
  public result :number;
  public a:string;

  
  
  constructor() {}
 




  cal_Add(){
    
    this.result=Number(this.num1)+Number(this.num2);
  }
  cal_Sub(){
    this.result=this.num1-this.num2;
  }
  cal_Multi(){
    this.result=this.num1*this.num2;
  }
  
  cal_Div(){
    if(this.num2==0){
      this.a="divide by zero error";
    }
    else{

    
    
    this.result=this.num1/this.num2;
  }}
  


  



  ngOnInit() {
  }


}

