import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicce/auth.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit{


  constructor(private authService:AuthService){}


  ngOnInit(): void {
    this.authService.loginUser(this.authService.getToken());
  }

}
