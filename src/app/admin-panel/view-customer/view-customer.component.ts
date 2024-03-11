import { AfterViewInit, Component } from '@angular/core';
import { CurrentUserResponse } from 'src/app/payload/Response/current-user-response';
import { AdminService } from 'src/app/servicce/admin.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements AfterViewInit{
  constructor(private service:AdminService)
  {}
  currentpage :number= 0;
  itemPerPage :number= 10;
  length: number = 0;
  user:CurrentUserResponse[]=[];
  ngAfterViewInit(): void {
   this.getAllCustomer(this.currentpage,this.itemPerPage);
  }
 
  getAllCustomer(pageno:number,itemPerPage:number)
  {
    this.service.listOfCustomers(pageno,itemPerPage).subscribe((data:any)=>
   {
       this.user=data.message.content;
       this.length=data.message.totalElements;
       console.log(this.user);
       
   })
  }
  changePage(page: number) {
    
    this.currentpage = page;
    console.log(this.currentpage,this.itemPerPage);
    this.getAllCustomer(this.currentpage,this.itemPerPage);
  }
  get PaginatedData() {
    const start = this.currentpage  * this.itemPerPage;
    const end = (this.currentpage +1)* this.itemPerPage;
    return this.user;
  }
}
