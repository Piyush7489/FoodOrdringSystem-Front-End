import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewCategoryResponse } from 'src/app/payload/server-response/view-category-response';
import { RestCategoryRequest } from 'src/app/payload/service-request/rest-category-request';
import { GlobalCategoryService } from 'src/app/servicce/global-category.service';
import { RestautantService } from 'src/app/servicce/restautant.service';

@Component({
  selector: 'app-view-restaurant-by-owner',
  templateUrl: './view-restaurant-by-owner.component.html',
  styleUrls: ['./view-restaurant-by-owner.component.css']
})
export class ViewRestaurantByOwnerComponent implements AfterViewInit {





  constructor(private restService:RestautantService,private activeroute:ActivatedRoute,private gService:GlobalCategoryService,private router:Router){}
  restId:any;
  ngAfterViewInit(): void {
     this.activeroute.params.subscribe((params)=>
     {
      this.restId=params['restId']
     }) 
     this.getCategoryOfRestaurant();
  }
  cat:ViewCategoryResponse[]=[];
  getCategoryOfRestaurant()
  {
    this.restService.getResataurantCategory(this.restId).subscribe((data:any)=>
    {
          this.cat=data.message;
          console.log(this.cat);
          
    })
  }
  extraCat:ViewCategoryResponse[]=[];
  addCategory() {
    
    this.gService.getextraCategory(this.restId).subscribe((data:any)=>
    {
      this.extraCat = data.message
      console.log(this.extraCat);
    })
    
     const content = document.getElementById('content');
     const modal = document.getElementById('addCatModel');
    if (modal) {
      modal.classList.add('show');
      content?.classList.add('blur-background')
      modal.style.display = 'block';
    }
    }
    closeModal() {
      const content = document.getElementById('content');
      const modal = document.getElementById('addCatModel');
     if (modal) {
      modal.classList.remove('show');
      content?.classList.remove('blur-background');
      modal.style.display='none'
     }
      }
checked:boolean=false;
selectedCategories:any[]=[];

onCategorySelect(event: any,selectId: number) {
      
      this.checked= event.target.checked;
      if(this.checked)
      {
        
        if(!this.selectedCategories.includes(selectId))
        {
          this.selectedCategories.push(selectId);
          console.log(this.selectedCategories);
          
        }
      }else{
        const index = this.selectedCategories.indexOf(selectId);
        if(index!==-1)
        {
          this.selectedCategories.splice(index,1);
        }
      }
      }
      rc:RestCategoryRequest=new RestCategoryRequest();  
   submitCategory() {      
    for(let catId of this.selectedCategories)
    {
        this.rc.catId=catId
        this.rc.restaurant_id=this.restId
      this.gService.addCategoryInRestaurant(this.rc).subscribe((data:any)=>
      {
          this.getCategoryOfRestaurant()
          this.router.navigate(['/owner/visit-rest-by-owner/'+this.restId]);
      })
    }
    this.closeModal();
        
        }
}
