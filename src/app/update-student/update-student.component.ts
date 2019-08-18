import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import  {StudentsService} from '../students.service';
import {Location} from '@angular/common/';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit { 
  formmodif:FormGroup;
  submitted:boolean;
  succe:boolean;

  constructor( private route:ActivatedRoute ,private service:StudentsService,private location:Location,private fb :FormBuilder ) { }
  s:Student;
  ngOnInit() { 
    this.GetStudent(); 
    this.formmodif=this.fb.group({ 
      nom:["",[Validators.required,Validators.pattern('[a-z A-Z]*')]],
      prenom:["",[Validators.required,Validators.pattern('[a-z A-Z]*')]],
      ID:["",] 
      


    })
     this.submitted=false;
     this.succe=false;



  } 

  GetStudent()
  {   
    const Id=+this.route.snapshot.paramMap.get("Id");
    this.service.GetStudent(Id).subscribe(
      data=>{ 
        this.s=data;

    })


  } 

  Goback()
  {
    this.location.back();
  } 

  onUpdate() 
  {  this.submitted=true;
    if(this.formmodif.invalid)
    return ;
    this.service.onUpdate(this.s.Id,this.s).subscribe(
      data=>{  this.succe=true; 
        

    } ,
    error=>{ 

    }
    )
    


  }

}
