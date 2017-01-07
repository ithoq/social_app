import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import {Http,Response} from '@angular/http';
import {Router} from '@angular/router';
import {MediumToLoginService} from '../../services/medium-to-login.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'sa-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.css']
})
export class CreateNewPasswordComponent implements OnInit {

  constructor(private http:Http, private router:Router, private mediumToLogin:MediumToLoginService) { }

  createNewPassword(form:NgForm){
    this.mediumToLogin.setTitle('Your Riza password has been reset.');
    (new Observable(observable => {
        setTimeout(function(){
            observable.next({success:"true"});
        },500);
    })).subscribe(
      (data:Response) => {
        this.router.navigate(['login']);
      },
      (error)=>{

      }
    );
  }
  ngOnInit() {
  }

}
