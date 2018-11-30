import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class FileUploadService {
url = 'http://127.0.0.1:5000';
constructor(private http:HttpClient) {}
  

inputFile : File;
postFile(fileToUpload: File):Observable<any>{
  const upload=new FormData()
  upload.append('inputFile',fileToUpload)
  return this.http.post<any>(`${this.url}/upload`,upload); 
  }
}
