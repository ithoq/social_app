import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {AuthService} from '../../services/auth.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'sa-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private auth:AuthService;
  private appService: AppService;
  private http: Http;
  private router: Router;
  public errors:any;
  public user:any;
  constructor(
    private authenticator: AuthService, private rootService:AppService,
     private httpService: Http, appRouter: Router, private route: ActivatedRoute
   ) {
      this.auth = authenticator;
      this.appService = rootService;
      this.http = httpService;
      this.router = appRouter;
      this.user = {
        email:'',
        password:''
      };
  }

  registerUser(form:NgForm){
    if(!this.validate(form.value)){return false;}

    this.http.get('http://api-social.apptazer.com/api/userRegister/&email='+form.value.email+'&username='+form.value.username+'&pass='+form.value.password+'').subscribe(
      (data:Response) => {
        console.log(data.json());
        this.router.navigate(['login']);
      },
      (e) => {
        this.errors = e.json()['error_message'];
        console.log(e.json())
      }
    );
  }

private validate(user:any){
  if(user.password != user.confirmpass){
    this.errors = "Password did not match!";
    return false;
  }
  return true;
}

  ngOnInit() {
    //this.contact = this.route.snapshot.data['contact'];
  }
}
