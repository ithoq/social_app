import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {AuthService} from '../../services/auth.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/User";
import {UserStuff} from "../../models/UserStuff";

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


  //default values
    public email = '';
    public username = '';
    public pass = '';
    public passagain = '';
  constructor(
    private authenticator: AuthService, private rootService:AppService,
     private httpService: Http, appRouter: Router, private route: ActivatedRoute,
    private users:UsersService
   ) {
      this.auth = authenticator;
      this.appService = rootService;
      this.http = httpService;
      this.router = appRouter;
      this.user = {
        email:'',
        password:''
      };

      // if(localStorage.getItem('user_num') == null){
      //     localStorage.setItem('user_num', '5');
      // }
      // localStorage.setItem('user_num',(parseInt(localStorage.getItem('user_num'))+1)+'');
      // this.email = 'newuser'+localStorage.getItem('user_num')+'@gmail.com';
      // this.username = 'newuser'+localStorage.getItem('user_num');
  }

  registerUser(form:NgForm){
    if(!this.validate(form.value)){return false;}

      this.users.register(form.value).subscribe(
          (data:Response) => {
              this.auth.attempt({Email:form.value.email, Password:form.value.password}).subscribe(
                  (data:Response) => {
                      /*
                       saving the authenticated user in the localStorage
                       */
                      let user = new User();
                      let updatedUser = data.json().payload.User;
                      for (var property in updatedUser) {
                          user[property] = updatedUser[property];
                      }
                      let userTimelines = (data.json().payload.Timelines == null)?[]:data.json().payload.Timelines;
                      let userStuff = new UserStuff(user, userTimelines, data.json().ManagedUsers);
                      this.auth.setUser(JSON.stringify(userStuff));
                      if(this.auth.getUser().timelines.length > 0)
                          this.router.navigate(['/log/'+this.auth.getUser().timelines[0].Id]);
                      else
                          this.router.navigate(['create-profile']);
                  },
                  (e) => {
                      this.errors = (e.json()['error_message'] != undefined)?e.json()['error_message']:'Something went wrong with the server or may be you internet connection is lost. please try a few moments later.';
                  }
              );
          },
          (e) => {
              this.errors = e.json()['error_message'];
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
