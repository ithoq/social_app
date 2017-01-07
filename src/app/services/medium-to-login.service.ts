import { Injectable } from '@angular/core';

@Injectable()
export class MediumToLoginService {
  private title:any;
  constructor() {
    this.title = {
      current:'Riza Login',
      default:'Riza Login'
    }
  }
  setTitle(title:any){
    this.title.current = title;
  };
  getTitle(){
    let title = this.title.current;
    this.title.current = this.title.default;
    return title;
  }

}
