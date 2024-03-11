import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Toasts from 'src/app/Utils/Toast';
import { ViewFoodResponse } from 'src/app/payload/server-response/view-food-response';
import { UpdateFoodRequest } from 'src/app/payload/service-request/update-food-request';
import { FoodService } from 'src/app/servicce/food.service';

@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.component.html',
  styleUrls: ['./view-food.component.css']
})
export class ViewFoodComponent implements AfterViewInit {



 updateFoodForm!:FormGroup;
  constructor(private service:FoodService,private fb:FormBuilder)
  {
    this.updateFoodForm = this.fb.group(
      {
        foodName:['',[Validators.required]],
        foodDescription:['',[Validators.required]],
        foodPrice:['',[Validators.required]],
        // restaurantImage:['',[Validators.required]]
      })
  }
  v:ViewFoodResponse[]=[];
  currentpage :number= 0;
  itemPerPage :number= 10;
  length: number = 0;
  ngAfterViewInit(): void {

    this.viewAllFood(this.currentpage,this.itemPerPage);
  }
   
 
flag=false;
  viewAllFood(currentpage:any,itemPerPage:any)
  {
    this.service.viewFood(currentpage,itemPerPage).subscribe((data:any)=>
    {
    
    if(data.message==null)
    {
      
      this.flag=false;
    }else
    {
     
      this.v=data.message.content
      this.length = data.message.totalElements;
      this.flag=true;
    }
    })
  }
  
  get PaginatedData() {
    const start = this.currentpage  * this.itemPerPage;
    const end = (this.currentpage +1)* this.itemPerPage;
    return this.v
  }

  changePage(page: number) {
    this.currentpage = page;
    this.viewAllFood(this.currentpage,this.itemPerPage);
  }

  updateFoodRequest:UpdateFoodRequest=new UpdateFoodRequest();
  updateFood(food: any) {
     this.foodPhoto = food.imageName;
   this.updateFoodRequest=food;
   console.log(this.updateFoodRequest);
   
   
   const content = document.getElementById('content');
   const  model = document.getElementById('updateModal');
   if(model)
   {
    model.classList.add('show');
    content?.classList.add('blur-background');
    model.style.display = 'block';
   }
   }
   closeModal() {
    const content = document.getElementById('content');
    const  model = document.getElementById('updateModal');
   if(model)
   {
      model.classList.remove('show');
      content?.classList.remove('blur-background');
      model.style.display = 'none';
   }
  }
  afterUpdate:any;
  updateChanges() {
    this.updateFoodForm.markAllAsTouched();
    console.log(this.updateFoodRequest);
    
      this.service.updateFood(this.updateFoodRequest).subscribe((data:any)=>
      {
        Toasts.fire({
          icon: 'success',
          title: data.message,
          timer: 3000
        })
        this.afterUpdate=data.data;
        console.table(this.afterUpdate);
        this.closeModal();
      })
    } 
    foodPhoto:any;
    setImage(event: any) {
      this.updateFoodRequest.imageName= event.target.files[0];
      this.foodPhoto=event.target.files[0];
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload=()=>{
        this.foodPhoto=reader.result as string;
      }
      reader.readAsDataURL(file);
      }
}
