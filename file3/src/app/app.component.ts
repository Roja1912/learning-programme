import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import * as XLSX from 'ts-xlsx';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileToUpload: File = null;

  constructor(private service:FileUploadService){

  }

//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
// }

name;
display;
display_data;
arrayBuffer:any;
file:File;
shell01;
shell11;
shell21;

shell02;
shell12;
shell22;



shell03;
shell13;
shell23;


shell04;
shell14;
shell24;


incomingfile(event) 
  {
  this.file= event.target.files[0]; 

  let fileReader = new FileReader();
    fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        console.log(XLSX.utils.sheet_to_json(worksheet.sheet,{raw:true}));
        console.log(worksheet)
        this.display_data=worksheet;
        
          this.shell01=worksheet.A1['v'];
          this.shell11=worksheet.A2['v'];
          this.shell21=worksheet.A3['v'];


          this.shell02=worksheet.B1['v'];
          this.shell12=worksheet.B2['v'];
          this.shell22=worksheet.B3['v'];



          this.shell03=worksheet.C1['v'];
          this.shell13=worksheet.C2['v'];
          this.shell23=worksheet.C3['v'];


          this.shell04=worksheet.D1['v'];
          this.shell14=worksheet.D2['v'];
          this.shell24=worksheet.D3['v'];



        


      
         
        // this.display_data=worksheet.A2['v'];
    }
    fileReader.readAsArrayBuffer(this.file);

  }



uploadFileToActivity() {
  this.service.postFile(this.file).subscribe(data => {
    this.name=data['message']
    this.display=this.name
  
    
    }, error => {
      console.log(error);
    });
}






}
