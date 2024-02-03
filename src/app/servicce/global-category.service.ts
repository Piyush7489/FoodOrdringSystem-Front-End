import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';

@Injectable({
  providedIn: 'root'
})
export class GlobalCategoryService {

  constructor(private http:HttpClient) { }

  public AddCategory(category:any)
  {
         return this.http.post(ApiRoutes.ADD_CATEGORY,category);
  }
}
