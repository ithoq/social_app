import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService){
    this.auth.set_app_token('aaaabbbbbcccc');
  }
  title = 'sa works!';
}
