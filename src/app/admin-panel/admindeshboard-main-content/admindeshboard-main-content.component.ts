import { Component, OnInit } from '@angular/core';
import { CountOfBoyandCustomer } from 'src/app/payload/server-response/count-of-boyand-customer';
import { RestaurantStatusCountResponse } from 'src/app/payload/server-response/restaurant-status-count-response';
import { AdminService } from 'src/app/servicce/admin.service';

@Component({
  selector: 'app-admindeshboard-main-content',
  templateUrl: './admindeshboard-main-content.component.html',
  styleUrls: ['./admindeshboard-main-content.component.css']
})
export class AdmindeshboardMainContentComponent implements OnInit{


  constructor(private adminService:AdminService){}
  statusCount:RestaurantStatusCountResponse = new RestaurantStatusCountResponse
  countOfBoyAndCustomer:CountOfBoyandCustomer = new CountOfBoyandCustomer
  ngOnInit(): void {
    this.getRestStatusCount();
    this.getCountOfCUstomerAndBoy()
  }

  getRestStatusCount()
  {
    this.adminService.getRestStausCount().subscribe({
      next:(data:any)=>{
        this.statusCount = data.data
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

  getCountOfCUstomerAndBoy()
  {
    this.adminService.getCOuntOfBoyAndCustomer().subscribe({
      next:(data:any)=>{
        this.countOfBoyAndCustomer = data.data
      },error:err=>{
        console.log(err);
        
      }
    })
  }

}
