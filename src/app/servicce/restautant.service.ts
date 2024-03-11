import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantSaveRequest } from '../payload/service-request/rest-save-request';
import { ApiRoutes } from '../Utils/api-routes';
import { UpdateRestResponse } from '../payload/server-response/update-rest-response';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class RestautantService {

  constructor(private http: HttpClient) { }


  public registerRestaurant(r: RestaurantSaveRequest) {

    const formData = new FormData();
    formData.append('restName', r.restName);
    formData.append('restCloseTime', r.restCloseTime);
    formData.append('restOpenTime', r.restOpenTime);
    formData.append('restDescription', r.restDescription);
    formData.append('imageName', r.imageName);
    formData.append('addressrequest', JSON.stringify(r.addressrequest));
    formData.append('fsseiLicenseRequest', JSON.stringify(r.fsseiLicenseRequest));
    formData.append('gstRegistrationRequest', JSON.stringify(r.gstRegistrationRequest));
    for (let i = 0; i < r.restCategory.length; i++) {
      formData.append('restCategory', r.restCategory[i]);
    }
    formData.append('gstlicensePhoto', r.gstlicensePhoto);
    formData.append('fssaiLicensePhoto', r.fssaiLicensePhoto);
    return this.http.post(ApiRoutes.REGISTER_RESTAURANT, formData);

  }
  public updateRestaurant(updateRest: UpdateRestResponse) {
   
    const formData = new FormData();
    typeof updateRest.restImage!=='string'&&
    formData.append('restimage',updateRest.restImage);
    updateRest.restImage = ''
    formData.append('rest', JSON.stringify(updateRest));
    return this.http.put(ApiRoutes.UPDATE_RESTAURANT, formData);
  }

  public getDataOfRestaurant(page: any, size: any) {
    return this.http.get(ApiRoutes.GET_ALL_RESTAURANT + `?page=${page}&size=${size}`);
  }

  public getRestaurantOfOwner() {
    return this.http.get(ApiRoutes.OWNER_RESTAURANT);
  }

  public getRestDataByRestid(id: any) {
    return this.http.get(ApiRoutes.UPDATE_REST_DATA_BY_REST_ID + `${id}`)
  }


  public getRestNameOfOwners()
  {
    return this.http.get(ApiRoutes.REST_NAME_OF_OWNER);
  }
}
