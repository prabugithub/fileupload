import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url
  baseApiUrl = "https://file.io"

  constructor(private http:HttpClient) { }

  // Returns an observable
  upload(file: any):Observable<any> {

      // Create form data
      const formData = new FormData();

      // Store form name as "file" with file data
      formData.append("file", file);

      localStorage.setItem('savedFile', JSON.stringify(formData));
      var reader = new FileReader()
      reader.onload = function(base64) {
         localStorage["file"] = base64;
      }
      reader.readAsDataURL(file);

      return of({res: "success"});

      // Make http post request over api
      // with formData as req
     // return this.http.post(this.baseApiUrl, formData)
  }
}
