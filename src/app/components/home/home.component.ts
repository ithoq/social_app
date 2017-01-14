import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Response} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'sa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private appRouter: Router) {}

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
    console.log(this.auth.getUser());
  }

}
