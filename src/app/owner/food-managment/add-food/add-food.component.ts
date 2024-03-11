import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { restNameResponse } from 'src/app/payload/server-response/rest-name-response';
import { AddFoodRequest } from 'src/app/payload/service-request/add-food-request';
import { FoodService } from 'src/app/servicce/food.service';
import { GlobalCategoryService } from 'src/app/servicce/global-category.service';
import { RestautantService } from 'src/app/servicce/restautant.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements AfterViewInit{

  
  constructor(private service:FoodService,private fb:FormBuilder,private router:Router,private restService:RestautantService,private catService:GlobalCategoryService){
    this.foodForm=fb.group({
      foodName:['',[Validators.required]],
      foodDescription:['',[Validators.required]],
      foodPrice:['',[Validators.required]],
      imageName:['',[Validators.required]]
    })
  }
  food:AddFoodRequest=new AddFoodRequest();
  foodForm!:FormGroup;
  restName:restNameResponse[]=[];
  selectedRestaurantId:any='';
  ngAfterViewInit(): void {
    this.restService. getRestNameOfOwners().subscribe((data:any)=>{
     this.restName=data.message;
     console.log(this.restName);
     
    })
  }
  
  setImage(event:any)
  {
     this.food.imageName=event.target.files[0];
     console.log( this.food.imageName);
     
  
  }
  onSubmit() {
   
    this.foodForm.markAllAsTouched();
    if(!this.foodForm.valid)
    {
      return;
    }
    this.service.addFood(this.food).subscribe((data:any)=>
    {
      Toasts.fire({
        text:data.message,
        timer:3000,
        icon:'success'
      })
   
    })
      this.router.navigate(['owner/'])
    }
    isDropdownOpen: boolean = false;
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }

    restCatName:any[]=[];
    selectRest(restId:any) {
     this.selectedRestaurantId=restId
     this.food.restaurantId = restId;
      this.catService.getAllCatnameOfRestaurant(this.selectedRestaurantId).subscribe((data:any)=>
      {
       this.restCatName=data.message;
       console.log(this.restCatName); 
       this.isDropdownOpen = true;
      })
    
      }
      selectRest1(event:any){
          this.food.globalCategoryId =event
      }
}
