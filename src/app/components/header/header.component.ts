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
      //alert(toggleBtn);
      //  $(document).on('click', '.mainnav-toggle', function(e){
    toggleBtn.on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            var niftyContainer =  $('#container');
            var niftyWindow =$(window);
            var widnowwidth = niftyWindow.width();
            if(widnowwidth > 767) {
                niftyContainer.toggleClass('mainnav-lg mainnav-sm')
            }
            else {
                niftyContainer.toggleClass('mainnav-sm mainnav-in')
            }
        }
    )
  }
}
