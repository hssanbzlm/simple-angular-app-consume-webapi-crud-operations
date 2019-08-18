import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [
                         {path:"modifier/:Id",component:UpdateStudentComponent},
                         {path:"liststudent",component:ListStudentsComponent},
                         {path:"",redirectTo:"liststudent",pathMatch:"full"},
                         {path:"add",component:AddStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
