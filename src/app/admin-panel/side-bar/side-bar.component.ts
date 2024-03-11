import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicce/admin.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor(private service:AdminService)
  {

  }
  ngOnInit(): void {

  }
  
}
