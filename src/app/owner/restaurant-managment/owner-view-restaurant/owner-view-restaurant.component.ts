import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Toasts from 'src/app/Utils/Toast';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { UpdateRestResponse } from 'src/app/payload/server-response/update-rest-response';
import { ViewRestaurantOfOwnerByAdmin } from 'src/app/payload/server-response/view-rest-of-owner-id';
import { RestaurantSaveRequest } from 'src/app/payload/service-request/rest-save-request';
import { RestautantService } from 'src/app/servicce/restautant.service';

@Component({
  selector: 'app-owner-view-restaurant',
  templateUrl: './owner-view-restaurant.component.html',
  styleUrls: ['./owner-view-restaurant.component.css']
})
export class OwnerViewRestaurantComponent implements AfterViewInit {


  restPhoto: any;
  updateRestForm!: FormGroup;
  constructor(private service: RestautantService, private fb: FormBuilder) {
    this.updateRestForm = this.fb.group({
      restName: ['', [Validators.required]],
      restOpenTime: ['', [Validators.required]],
      restCloseTime: ['', [Validators.required]],
      restDescription: ['', [Validators.required]],
      //  restaurantImage: ['', [Validators.required]],
      restContect: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],

    })
  }
  ngAfterViewInit(): void {

    this.getAllRestOfOwner();

  }

  viewRest: ViewRestaurantOfOwnerByAdmin[] = [];
  verified = ApiRoutes.VERIFIED;
  unverified = ApiRoutes.UNVERIFIED;
  block=ApiRoutes.BLOCK
  getAllRestOfOwner() {
    this.service.getRestaurantOfOwner().subscribe((data: any) => {
      this.viewRest = data.message;
      console.log(this.viewRest);

    })
  }
  updateRestResponse: UpdateRestResponse = new UpdateRestResponse();
  updateRestaurantModule(restid: any) {

    this.service.getRestDataByRestid(restid).subscribe((data: any) => {
      this.updateRestResponse = data.message;
      this.restPhoto = this.updateRestResponse.restImage;
      console.log(this.updateRestResponse);

    })

    console.log(this.updateRestResponse);
    const content = document.getElementById('content');
    const modal = document.getElementById('updateRest');
    if (modal) {
      modal.classList.add('show');
      content?.classList.add('blur-background')
      modal.style.display = 'block';
    }

  }
  closeModal() {
    const modal = document.getElementById('updateRest');
    const content = document.getElementById('content');
    if (modal) {
      modal.classList.remove('show');
      content?.classList.remove('blur-background')
      modal.style.display = 'none';
    }
  }
  setImage(event: any) {
    this.updateRestResponse.restImage = event.target.files[0];
    this.restPhoto = event.target.files[0];
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.restPhoto = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
  index: number = 0
  afterUpdate:any;
  updateRestaurant() {
    if (!this.updateRestForm.valid) {
      this.updateRestForm.markAsTouched();
      return;
    }

    this.service.updateRestaurant(this.updateRestResponse).subscribe((data: any) => {
      Toasts.fire({
        icon: 'success',
        title: data.message,
        timer: 3000
      })
      this.afterUpdate=data.data;
      this.viewRest[this.index] = this.afterUpdate;
      this.viewRest[this.index].createdat=this.afterUpdate.createdAt
      // this.restPhoto = ''
      this.viewRest[this.index].fssaiLicenceNo=this.afterUpdate.fssaiLicencePhoto
      
      
      console.table(this.viewRest[this.index].fssaiLicencePhoto);
      this.closeModal();
    })
  }
}
