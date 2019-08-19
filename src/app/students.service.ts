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
<<<<<<< HEAD
    var  url="http://localhost:65186/api/students";
    return this.http.get<Student[]>(url)
    
=======
    var  url="http://localhost:65186/api/students";//asp.net web api
    return this.http.get<Student[]>(url);
>>>>>>> 1c970430bde90fb6512e850ae56656f235e06ae8
   } 

   onDelete(Id:number)
   {  
       var url="http://localhost:65186/api/students/"+Id;//asp.net web api
       return this.http.delete(url);

   }
   onUpdate(Id:number,s:Student):Observable<any>
   {    
     var url="http://localhost:65186/api/students/"+Id;//asp.net web api

     return this.http.put(url,s);
      

   }

   GetStudent(Id:number):Observable<Student>
   { 

    var url="http://localhost:65186/api/students/"+Id;//asp.net web api
    return this.http.get<Student>(url);

   } 

   AddStudent(s:Student):Observable<any>
   { 
     var url="http://localhost:65186/api/students"//asp.net web api
    return this.http.post(url,s);
   }
    
   

}
