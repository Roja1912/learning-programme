import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormModel1 } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() data:FormModel1;
  @Output() dataChange=new EventEmitter();
  

  form1;
  

  @Output() screenchange=new EventEmitter<boolean>();
  screen:boolean=false;

  constructor(
    private fb: FormBuilder
  ) { }

ngOnInit() {
  this.initForm();
  console.log(this.form1)
}

onClickBehind(){
  this.screenchange.emit(this.screen);
  this.dataChange.emit(this.form1.value);
}





initForm() {
  this.form1= this.fb.group({
    tenthmarks: new FormControl(this.data.tenthmarks, Validators.required),
    pucmarks: new FormControl(this.data.pucmarks,Validators.required),
    graduate: new FormControl(this.data.graduate,Validators.required),
    postgraduate: new FormControl(this.data.postgraduate,Validators.required)
  })
}


// next() {
//   this.router.navigate(['login'])
// }
// onKeyTenthMarks(e){
//   sessionStorage.setItem('tenthmarks',e.target.value);
// }
// onKeyPucMarks(e){
//   sessionStorage.setItem('pucmarks',e.target.value);
// }


}


