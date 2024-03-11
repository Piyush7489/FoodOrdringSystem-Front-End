import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';
import { AddFoodRequest } from '../payload/service-request/add-food-request';
import { UpdateFoodRequest } from '../payload/service-request/update-food-request';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  public viewFood(page:any,size:any)
  {
    return this.http.get(ApiRoutes.VIEW_FOOD + `?page=${page}&size=${size}`); 
  }

  public addFood(food:AddFoodRequest)
  {
    const formData = new FormData();
    formData.append('foodImage',food.imageName);
    food.imageName=''
    formData.append('food',JSON.stringify(food));
    return this.http.post(ApiRoutes.ADD_FOOD,formData); 
  }

  public updateFood(updateFood:UpdateFoodRequest)
  {
    const formData = new FormData();
    typeof updateFood.imageName!=='string'&&
    formData.append('foodImage',updateFood.imageName);
    updateFood.imageName=''
    formData.append('food',JSON.stringify(updateFood));
    return this.http.put(ApiRoutes.UPDATE_FOOD,formData);
  }
}
