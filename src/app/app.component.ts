import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CategoriesService } from '../shared/app.service';
import { Categories } from '../shared/app.model';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[CategoriesService]
})
export class AppComponent {

  constructor(public service:CategoriesService) {
    
   }

   ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp:Categories){
  
    this.service.formData=emp ;
    }

  title = 'myNewApp';
  hello(a:number){
     alert("Hello World! :"+a);
  }
  show:boolean = false;

  studentName=["Ravi","sanjay","swapnil","Vikram"];

  Countries=[
      {id:1,name:"India"},
      {id:2,name:"Japan"},
      {id:3,name:"Srilanka"}
    ]

    fun(form:NgForm)
    {
      alert("Have yo clicked");
      console.log(form.value.EmpName);
    }


}
