import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  constructor(private http: HttpClient) { }

  public getAllReviewOfAdmin() {
    return this.http.get(ApiRoutes.GET_ALL_REVIEW)
  }

  public deleteReview(reviewId: any) {
    return this.http.delete(ApiRoutes.DELETE_REVIEW_BY_ADMIN + `${reviewId}`)
  }
}
