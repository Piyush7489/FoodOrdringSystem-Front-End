import { AfterViewInit, Component } from '@angular/core';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { OwnerResponse } from 'src/app/payload/server-response/owner-list-response';
import { ViewRestaurantOfOwnerByAdmin } from 'src/app/payload/server-response/view-rest-of-owner-id';
import { AdminService } from 'src/app/servicce/admin.service';

@Component({
  selector: 'app-view-owners',
  templateUrl: './view-owners.component.html',
  styleUrls: ['./view-owners.component.css']
})
export class ViewOwnersComponent implements AfterViewInit {

  verified=ApiRoutes.VERIFIED;
  imageUrl = ApiRoutes.IMAGE_URL
  unverified=ApiRoutes.UNVERIFIED;
  constructor(private service:AdminService){}
  ngAfterViewInit(): void {
    this.getAllOwner(this.currentpage,this.itemPerPage);
  }
  currentpage :number= 0;
  itemPerPage :number= 10;
  length: number = 0;
owner:OwnerResponse[]=[];
getAllOwner(pageno:number,itemPerPage:number)
{
   this.service.listOfOwners(pageno,itemPerPage).subscribe((data:any)=>
   {
       this.owner=data.message.content;
       this.length=data.message.totalElements;
   })
}
changePage(page: number) {
    
  this.currentpage = page;
  console.log(this.currentpage,this.itemPerPage);
  this.getAllOwner(this.currentpage,this.itemPerPage);
}

get PaginatedData() {
  const start = this.currentpage  * this.itemPerPage;
  const end = (this.currentpage +1)* this.itemPerPage;
  return this.owner;
}

viewRest:ViewRestaurantOfOwnerByAdmin[]=[];
viewOwnerRestaurant(ownerId: number) {
  
  
  this.service.viewRestOfOwnerByOwnerId(ownerId).subscribe((data:any)=>
  {
    this.viewRest=data.message;
    console.log(this.viewRest);
    
  })

  const content = document.getElementById('content');
  const modal = document.getElementById('view-rest');
  if(modal)
  {
    modal.classList.add('show');
    content?.classList.add('blur-background')
    modal.style.display = 'block';
  }
  }
  closeModal() {
    const modal = document.getElementById('view-rest');
    const content = document.getElementById('content');
    if (modal) {
      modal.classList.remove('show');
      content?.classList.remove('blur-background')
      modal.style.display = 'none';
    }
  }

}
