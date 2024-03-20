import { RestReviewResponse } from "./rest-review-response";
import { UserReviewResponse } from "./user-review-response";

export class ReviewResponse {

    reviewId = '';
    rating = 0;
    description = '';
    user: UserReviewResponse = new UserReviewResponse;
    rest: RestReviewResponse = new RestReviewResponse;
    createAt = ''
}
