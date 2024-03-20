import { Component, OnInit } from '@angular/core';
import Toasts from 'src/app/Utils/Toast';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { ReviewResponse } from 'src/app/payload/server-response/review-response';
import { ReviewServiceService } from 'src/app/servicce/review-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {

  imageUrl: any
  reviews: ReviewResponse[] = []
  constructor(private service: ReviewServiceService) { }
  ngOnInit(): void {
    this.imageUrl = ApiRoutes.IMAGE_URL;
    this.getAllReview();
  }

  getAllReview() {
    this.service.getAllReviewOfAdmin().subscribe({
      next: (data: any) => {
        this.reviews = data.data
        console.log(this.reviews);
      }
    })
  }

  public deleteReview(reviewId: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteReview(reviewId).subscribe({
          next: (response: any) => {
            this.reviews = this.reviews.filter((review) => review.reviewId != reviewId);
            Toasts.fire({
              title: response.message,
              icon: 'success'
            })
          }, error: err => {
            Toasts.fire({
              title: 'Failed to delete review and rating.',
              icon: 'error'
            })
          }
        })
      }
    })
  }
}
