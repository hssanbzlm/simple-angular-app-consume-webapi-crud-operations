import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import  {Student} from './student'


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { } 

   GetAllStudent():Observable<Student[]>
   {
    var  url="http://localhost:65186/api/students";//asp.net web api
    return this.http.get<Student[]>(url);
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
