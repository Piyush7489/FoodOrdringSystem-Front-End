import { ViewCategoryResponse } from "../payload/server-response/view-category-response";

export class pageCategoryResponse
{
    contents:ViewCategoryResponse[]=[];
    pageNo: number = 0;
    pageSize: number = 0;
    totalElements: number = 0;
    totalPages: number = 0;
    lastPage: boolean = true;
}