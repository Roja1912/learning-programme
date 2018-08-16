import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  tenthmarks:string;
  pucmarks:string;
  constructor(
    private router: Router
  ) { }

ngOnInit() {
  this.tenthmarks=sessionStorage.getItem('tenthmarks');
  this.pucmarks=sessionStorage.getItem('pucmarks');
}


next() {
  this.router.navigate(['login'])
}
onKeyTenthMarks(e){
  sessionStorage.setItem('tenthmarks',e.target.value);
}
onKeyPucMarks(e){
  sessionStorage.setItem('pucmarks',e.target.value);
}


}
