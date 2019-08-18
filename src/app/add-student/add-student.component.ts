import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import {Location} from '@angular/common/';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addstudent:FormGroup;
  nom:string;
  prenom:string;
  s:Student=new Student;
  submitted:boolean;
  constructor(private fb:FormBuilder ,private service:StudentsService ,private location:Location) { }

  ngOnInit() { 

  this.addstudent=this.fb.group({ 
    nom:["",[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    prenom:["",[Validators.required,Validators.pattern('[a-z A-Z]*')]]



  })
this.submitted=false;


  } 
  addStudent()
  {  this.submitted=true; 
    if(this.addstudent.invalid)
    return ;
    this.s.Nom=this.nom;
    this.s.Prenom=this.prenom; 
    this.service.AddStudent(this.s).subscribe( 
      data=>{

    },
    error=>{

    }
    );

  } 

  GoBack()
  {  
    this.location.back();

  }

}
