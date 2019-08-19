import { Injectable } from '@angular/core';
import  {HttpClient, HttpErrorResponse} from '@angular/common/http';
import  {Student} from './student'

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { } 

   GetAllStudent():Observable<Student[]>
   {
    var  url="http://localhost:65186/api/students";
    return this.http.get<Student[]>(url)
    
   } 

   onDelete(Id:number)
   {  
       var url="http://localhost:65186/api/students/"+Id;
       return this.http.delete(url);

   }
   onUpdate(Id:number,s:Student):Observable<any>
   {    
     var url="http://localhost:65186/api/students/"+Id;

     return this.http.put(url,s);
      

   }

   GetStudent(Id:number):Observable<Student>
   { 

    var url="http://localhost:65186/api/students/"+Id;
    return this.http.get<Student>(url);

   } 

   AddStudent(s:Student):Observable<any>
   { 
     var url="http://localhost:65186/api/students"
    return this.http.post(url,s);
   }
    
   

}
