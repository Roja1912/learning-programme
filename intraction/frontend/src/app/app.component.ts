import { Component } from '@angular/core';
import { Serviceservice } from './service/service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: String;
  age: Number;
  company: String;
  constructor(private service: Serviceservice) {
  }

  data;

  public onAdd() {
    console.log("added successfully");
    const data = { name: this.name,age: this.age,company: this.company };
    this.service.addData(data).subscribe((response: any) => {
      console.log("Response", response);

      if (response.success) {
        alert(response.message);
        this.name = null;
        this.age = null;
        this.company = null;
        } else {
        alert(response.error);
        }
        
        })
        
        }

    



  onRead() {
    console.log("read success");
    this.service.readData(this.name).subscribe((response:any)=>{
      console.log("Response",response);
      this.data = response;
        this.name=response.result.name;
        this.age=response.result.age;
        this.company=response.result.company;
      if(response.success){
        // this.name=response.result.name;
        // this.age=response.result.age;
        // this.company=response.result.company;
        alert(response.message);
      }else{
        alert(response.message);
        this.name=null;
      }
    },(err)=>{
      alert(err.message);
      this.name=null;
    })
    }





  onPut() {
    console.log('UPDATE BUTTON');
  const data = { name: this.name,age: this.age,company:this.company};
  this.service.updateData(this.name, data).subscribe((response: any) => {
  console.log("Resone: ", response);
  if (response.success) {
  // this.name = null;
  // this.age = null;
  // this.company=null;
  alert(response.message);
  } else {
  alert(response.message);
  }
  }, (err) => {
  alert(err.message)
  });


  }




  onDelete() {
    console.log('DELETE BUTTON');
    this.service.deleteData(this.name).subscribe((response: any) => {
    if (response.success) {
    this.name = null;
    this.age = null;
    this.company=null;
    alert(response.message)
    } else {
    alert(response.message);
    }
    }, (err) => {
    alert(err.message)
    });


  }
}




  
  //