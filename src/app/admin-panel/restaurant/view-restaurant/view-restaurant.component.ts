import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { VerificationResponse } from 'src/app/payload/server-response/rest-verification';
import { ViewRestaurantResponse } from 'src/app/payload/server-response/view-restaurant-response';
import { AdminService } from 'src/app/servicce/admin.service';
import { RestautantService } from 'src/app/servicce/restautant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements AfterViewInit {
onChange(rest:any) {
if(rest.isBlocked==this.block)
{
    this.service.blockRestaurantById(rest.restId).subscribe((data:any)=>
    {
      console.log(data.data);
    })
}
else if(rest.isBlocked==this.unblock)
{
    this.service.unBlockRestaurantById(rest.restId).subscribe((data:any)=>
    {
      console.log(data.data);
    })
}


}



  


  verified=ApiRoutes.VERIFIED;
  unverified=ApiRoutes.UNVERIFIED;
  block=ApiRoutes.BLOCK;
  unblock=ApiRoutes.UNBLOCK;

  constructor(private service:AdminService,private restService:RestautantService)
  {}
 

  currentpage :number= 0;
  itemPerPage :number= 10;
  length: number = 0;
  r:ViewRestaurantResponse[]=[];
  
  ngAfterViewInit(): void {
    this.getRestaurant(this.currentpage,this.itemPerPage);
  }
public getRestaurant(page:any,size:any)
{
  
  this.restService.getDataOfRestaurant(page,size).subscribe((data:any)=>
  {
    this.r=data.message.content;
    this.length=data.message.totalElements; 
  })
}



changePage(page: number) {
  this.currentpage = page;
  this.getRestaurant(this.currentpage,this.itemPerPage);
}

get PaginatedData() {
  const start = this.currentpage  * this.itemPerPage;
  const end = (this.currentpage +1)* this.itemPerPage; 
  return this.r
}
    
  
toggleStatus(id:any,status:any)
{
   this.service.changeRestStatus(id,status).subscribe((data)=>
   {
    console.log(data);
   })
}

viewResponse:ViewRestaurantResponse =new ViewRestaurantResponse();



verification :VerificationResponse= new VerificationResponse();
  viewRestaurantModel(id: any) {
    this.service.verificationRequiredData(id).subscribe((data:any)=>
    {
      this.verification=data.message;
        console.log(this.verification);
        
    })
    const content = document.getElementById('content');
   const modal = document.getElementById('viewModal');
   if (modal) {
     modal.classList.add('show');
     content?.classList.add('blur-background')
     modal.style.display = 'block';
   }
 }

 closeRestaurantModel()
 {
  const content = document.getElementById('content');
  const modal = document.getElementById('viewModal');
  if(modal)
  {
     modal.classList.remove('show');
     content?.classList.remove('blur-background')
     modal.style.display='none';
  }
 }

 verifyRestaurant(id: string) {
  Swal.fire({
    title:'Are you sure?',
    text:'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Approve'
  }).then((result)=>{
    if(result.isConfirmed)
    {
      this.service.verificationOfRestaurantById(id).subscribe((data:any)=>{

        Swal.fire(
          'Approved!',
          data.data,
          'success'
        );
        this.getRestaurant(this.currentpage,this.itemPerPage);
      })
    }
  })
  this.closeRestaurantModel();
 
}

rejectRestaurant(id:any)
{
  Swal.fire({
    title:'Are you sure?',
    text:'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Reject'
  }).then((result)=>{
    if(result.isConfirmed)
    {
      this.service.rejectRestaurantById(id).subscribe((data:any)=>{

        Swal.fire(
          'Rejected..!',
          data.data,
          'success'
        );
        this.getRestaurant(this.currentpage,this.itemPerPage);
      })
    }
  })
  this.closeRestaurantModel();
 
}
}
