import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public viewAllRestaurant(pageNo:any,pageSize:any,sortBy:any)
  {
    return this.http.post(ApiRoutes.GET_ALL_RESTAURANT+`/${pageNo}/${pageSize}/${sortBy}`,{});
  }
}
