//this service is used to transfer data from any component to login component

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

  /*
    returns the current title from the title object
    set current title with the default one.
    basically its like a flash message. which can only be used once.
   */
  getTitle(){
    let title = this.title.current;
    this.title.current = this.title.default;
    return title;
  }

}
