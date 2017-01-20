import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    var toggleBtn = $('.mainnav-toggle');
    toggleBtn.on('click', function(e){
          e.preventDefault();
          e.stopPropagation();

          if(toggleBtn.hasClass('push')){
            $.niftyNav('pushToggle');
          }else if(toggleBtn.hasClass('slide')){
            $.niftyNav('slideToggle');
          }else if(toggleBtn.hasClass('reveal')){
            $.niftyNav('revealToggle');
          }else{
            $.niftyNav('colExpToggle');
          }
        }
    )
  }
}
