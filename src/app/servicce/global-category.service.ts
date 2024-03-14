import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';
import { ViewCategoryResponse } from '../payload/server-response/view-category-response';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalCategoryService {

  constructor(private http:HttpClient) { }

  public AddCategory(category:any)
  {
         const formdata= new FormData();
         formdata.append('catImage',category.catImage)
         category.catImage='';
         formdata.append('category',JSON.stringify(category));
         return this.http.post(ApiRoutes.ADD_CATEGORY,formdata);
  }

  public getCategoryById(id:any)
  {
    return this.http.get(ApiRoutes.GET_CATEGORY_BY_ID+`${id}`)
  }
 
  public updateCategory(response:ViewCategoryResponse)
  {
    return this.http.put(ApiRoutes.UPDATE_CATEGORY,response);
  }

  public deleteCategory(id:any)
  {
    return this.http.delete(ApiRoutes.DELETE_CATEGORY+`${id}`);
  }

  public updateStatus(id:any,status:any)
  {
    return this.http.get(ApiRoutes.UPDATE_STATUS+`${id}/${status}`)
  }

  public getDataOfCategory(page:number,size:number){
     return this.http.get(ApiRoutes.GET_DATA_OF_CAT+`?page=${page}&size=${size}`);
  }
  
  public getAllCatname()
  {
    return this.http.get(ApiRoutes.GET_ALL_Cat_NAME);
  }

  public getAllCatnameOfRestaurant(restId:any)
  {
    return this.http.get(ApiRoutes.REST_CAT_NAME+`${restId}`)
  }

  public getextraCategory(restId:any)
  {
    return this.http.get(ApiRoutes.EXTRA_CAT_NAME_OF_RESTAUrANT+`${restId}`)
  }

  public addCategoryInRestaurant(rc:any)
  {
    return this.http.post(ApiRoutes.ADD_CATEGORY_IN_RESTAURANT,rc);
  }
}
