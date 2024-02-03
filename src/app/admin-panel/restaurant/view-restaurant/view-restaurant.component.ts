import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicce/admin.service';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {
  constructor(private service:AdminService)
  {}
  ngOnInit(): void {
  
    this.service.viewAllRestaurant(0,2,'restName').subscribe((data:any)=>
    {
      alert(data.value);
    })
  }



}
