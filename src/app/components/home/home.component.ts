import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'sa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private auth: AuthService;
  constructor(private authService: AuthService, private appRouter: Router) {
    this.auth = authService;
  }

  logout(){
    this.auth.logout().subscribe(
      (response: Response)=>{
        console.log('loggedout');
        this.appRouter.navigate(['login']);
      },
      (error)=>{}
    );
  }

  ngOnInit() {
  }

}
