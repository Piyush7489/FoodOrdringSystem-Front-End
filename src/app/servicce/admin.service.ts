import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public viewAllRestaurant()
  {
    return this.http.get(ApiRoutes.GET_ALL_RESTAURANT);
  }
  public viewAllCategory(pageNo:any,pageSize:any,sortBy:string)
  {
     return this.http.post(ApiRoutes.VIEW_ALL_CATEGORY+`/${pageNo}/${pageSize}/${sortBy}`,{},{})
  }
  public AllCategory()
  {
    return this.http.get(ApiRoutes.CATEGORY);
  }

  public changeRestStatus(id:any,status:any)
  {
     return this.http.get(ApiRoutes.UPDATE_STATUS_RESTAURANT+`${id}/${status}`)
  }
  public getAllVerifyRestaurant()
  {
    return this.http.get(ApiRoutes.GET_VERIFIED_RESTAURANT);
  }

  public verificationRequiredData(id:any)
  {
    return this.http.get(ApiRoutes.VERIFICATION_REQUIRED_DATA+`${id}`)
  }
  public verificationOfRestaurantById(id:any)
  {
    return this.http.get(ApiRoutes.VERIFIY_OF_RESTAURANT_BY_ID+`${id}`);
  }
  public rejectRestaurantById(id:any)
  {
    return this.http.get(ApiRoutes.REJECT_RESTAURANT_BY_ID+`${id}`);
  }

  public blockRestaurantById(id:any)
  {
    return this.http.get(ApiRoutes.BLOCK_RESTAURANT_BY_ID+`${id}`);
  }
  public unBlockRestaurantById(id:any)
  {
    return this.http.get(ApiRoutes.UNBLOCK_RESTAURANT_BY_ID+`${id}`);
  }
}
