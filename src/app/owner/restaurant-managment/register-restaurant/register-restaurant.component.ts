import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { ViewCategoryResponse } from 'src/app/payload/server-response/view-category-response';
import { RestaurantSaveRequest } from 'src/app/payload/service-request/rest-save-request';
import { GlobalCategoryService } from 'src/app/servicce/global-category.service';
import { RestautantService } from 'src/app/servicce/restautant.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements AfterViewInit {


  imageName:any
  fssaiLicensePhoto:any
  gstlicensePhoto:any
  imagePrivew:any
  constructor(private fb:FormBuilder,private catService:GlobalCategoryService,private restService:RestautantService,private router:Router)
  {
    this.restRegForm=this.fb.group({
      restName: ['', [Validators.required]],
      restOpenTime: ['', [Validators.required]],
      restCloseTime: ['', [Validators.required]],
      restDescription: ['', [Validators.required]],
      restaurantImage: ['', [Validators.required]],
      restContect:['',[Validators.required]],
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
        latitude: ['', [Validators.required]],
        longitude: ['', [Validators.required]], 
        gstlicenseNumber: ['', [Validators.required]],
        gstlicensePhoto:['',[Validators.required]],
        fssailicenseNumber: ['', [Validators.required]],
       fssaiLicensePhoto: ['', [Validators.required]],
    });
    this.getAllCatName();
  }
  r:RestaurantSaveRequest=new RestaurantSaveRequest();
  restRegForm!:FormGroup;
  ngAfterViewInit(): void {
   
  }
  register() {
    
   this.restRegForm.markAllAsTouched();
   if(!this.restRegForm.valid)
   {
    return;
   }
   this.restService.registerRestaurant(this.r).subscribe((data:any)=>{

    Toasts.fire({
      icon: 'success',
      text: data.message,
      timer: 5000
    });
   })
   setTimeout(() => {
    this.router.navigate(['owner/'])
  }, 8000);
  }

  
allCatName:ViewCategoryResponse[]=[];
  getAllCatName()
  {
    this.catService.getAllCatname().subscribe((data:any)=>
    {
       this.allCatName=data.message;
       console.log(this.allCatName);
       
    })
  }  
  onCheckboxChange(event: any, catId: any) {
    if (event.target.checked) {
      this.r.restCategory.push(catId);
    } else {
      this.r.restCategory = this.r.restCategory.filter(id => id !== catId);
    }
    this.restRegForm.get('restCategory')?.setValue(this.r.restCategory);
  }

   file:any
   reader:any
  setImage(event:any, s:string)
  {
    if(s=='imageName')
    {
      this.r.imageName=event.target.files[0];
      this.setImagePreviewInObj(s,this.r.imageName)
    }
    if(s=='fssaiLicensePhoto')
    {
      this.r.fssaiLicensePhoto=event.target.files[0];
      this.setImagePreviewInObj(s,this.r.fssaiLicensePhoto)
    }
    if(s=='gstlicensePhoto')
    {
     this.r.gstlicensePhoto=event.target.files[0];
     this.setImagePreviewInObj(s,this.r.gstlicensePhoto)
    }
  }

  setImagePreviewInObj(event:any,file:any){
    this.file = file
    this.reader = new FileReader();
   if(event === 'imageName')
   {
     this.reader.onload = () => {
       this.imageName = this.reader.result as string;
     };
   }
   if(event === 'fssaiLicensePhoto')
   {
    this.reader.onload = () => {
      this.fssaiLicensePhoto = this.reader.result as string;
    };
   }
   if(event === 'gstlicensePhoto')
   {
    this.reader.onload = () => {
      this.gstlicensePhoto = this.reader.result as string;
    };
   }
   this.reader.readAsDataURL(this.file);
  }
}
