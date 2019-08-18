import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
import  {Student} from '../student';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
   
  Students:Student[];
  s:Student;
  constructor(private service:StudentsService,private router:Router) { } 

  ngOnInit() { 
    this.GetAllStudent();
  }
   
  GetAllStudent()
  { 

    return this.service.GetAllStudent().subscribe(
      data=>{this.Students=data;

    })

  }  

  onDelete(Id:number)
  {    
    this.service.onDelete(Id).subscribe(
      data=> {  
        this.Students=this.Students.filter(s=>s.Id!=Id)


    }, 
    error=>{

    }
    )  
   


  }
  
    onUpdateNavigate(url:string,Id:number)
     {  
           url=url+"/"+Id;
            this.router.navigateByUrl(url);

     } 
     onAddNavigate(url:string)
     {
        this.router.navigateByUrl(url);

     } 

     

}
