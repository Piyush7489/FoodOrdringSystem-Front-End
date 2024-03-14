import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { CategoryRequest } from 'src/app/payload/service-request/category-request';
import { GlobalCategoryService } from 'src/app/servicce/global-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{


  constructor(private router:Router,private service:GlobalCategoryService,private fb:FormBuilder){
    this.categoryForm=this.fb.group({
      catName:['',[Validators.required,Validators.minLength(3)]],
      catDescription:['',[Validators.required,Validators.minLength(15)]],
      catImage:['',[Validators.required]]
     });
  }
  ngOnInit(): void {
    // this.checkCategoryFormValidation();
  }
  categoryReq:CategoryRequest = new CategoryRequest;
  categoryForm!:FormGroup;


  
  setImage(event: any) {
    this.categoryReq.catImage = event.target.files[0];
    }
    
  formSubmit()
  {
     
    this.categoryForm.markAllAsTouched();
    if(!this.categoryForm.valid)
    {
      return;
    }
   
    this.service.AddCategory(this.categoryReq).subscribe((data:any)=>
    {
      Toasts.fire({
        icon: 'success',
        text: data.message,
        timer: 1500
      })
      this.router.navigate(['/admin/view-category']);
    })
  }


  
}
