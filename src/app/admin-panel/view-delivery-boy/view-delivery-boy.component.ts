import { AfterViewInit, Component } from '@angular/core';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { CurrentUserResponse } from 'src/app/payload/Response/current-user-response';
import { AdminService } from 'src/app/servicce/admin.service';

@Component({
  selector: 'app-view-delivery-boy',
  templateUrl: './view-delivery-boy.component.html',
  styleUrls: ['./view-delivery-boy.component.css']
})
export class ViewDeliveryBoyComponent implements AfterViewInit {

  constructor(private admin: AdminService) { }
  ngAfterViewInit(): void {
    this.getAllBoy(this.currentpage, this.itemPerPage)
    this.imageUrl = ApiRoutes.IMAGE_URL
  }

  currentpage: number = 0;
  itemPerPage: number = 10;
  length: number = 0;
  boy: CurrentUserResponse[] = [];
  imageUrl: any


  getAllBoy(pageNo: any, itemPerPage: any) {
    this.admin.getListOfBoy(pageNo, itemPerPage).subscribe({
      next: (data: any) => {
        this.boy=data.message.content;
       this.length=data.message.totalElements;
       console.log(this.boy);
      }
    })
  }


  changePage(page: number) {

    this.currentpage = page;
    console.log(this.currentpage, this.itemPerPage);
    this.getAllBoy(this.currentpage, this.itemPerPage);
  }
  get PaginatedData() {
    const start = this.currentpage * this.itemPerPage;
    const end = (this.currentpage + 1) * this.itemPerPage;
    return this.boy;
  }

}
