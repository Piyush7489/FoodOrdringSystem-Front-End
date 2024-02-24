import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantSaveRequest } from '../payload/service-request/rest-save-request';
import { ApiRoutes } from '../Utils/api-routes';

@Injectable({
  providedIn: 'root'
})
export class RestautantService {

  constructor(private http:HttpClient) { }


  public registerRestaurant(r:RestaurantSaveRequest)
  {

    const formData = new FormData();
   formData.append('restName',r.restName);
    formData.append('restCloseTime',r.restCloseTime);
    formData.append('restOpenTime',r.restOpenTime);
    formData.append('restDescription',r.restDescription);
     formData.append('imageName',r.imageName);
    formData.append('addressrequest',JSON.stringify(r.addressrequest));
    formData.append('fsseiLicenseRequest',JSON.stringify(r.fsseiLicenseRequest));
    formData.append('gstRegistrationRequest',JSON.stringify(r.gstRegistrationRequest));
    for(let i=0;i<r.restCategory.length;i++){
      formData.append('restCategory',r.restCategory[i]);
    }
    formData.append('gstlicensePhoto',r.gstlicensePhoto);
    formData.append('fssaiLicensePhoto',r.fssaiLicensePhoto);
     return this.http.post(ApiRoutes.REGISTER_RESTAURANT,formData);
    
  }

  public getDataOfRestaurant(page:any,size:any)
  {
    return this.http.get(ApiRoutes.GET_ALL_RESTAURANT+`?page=${page}&size=${size}`);
  }

  
}
