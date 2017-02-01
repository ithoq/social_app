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
      var niftyContainer =  $('#container');
      var niftyWindow =$(window);

    var toggleBtn = $('.mainnav-toggle');
      //alert(toggleBtn);
      //  $(document).on('click', '.mainnav-toggle', function(e){
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
            try{
                $.niftyNav('colExpToggle');
            }
            catch(err) {
                if (niftyContainer.hasClass('mainnav-lg mainnav-sm')) niftyContainer.removeClass('mainnav-lg');
                niftyContainer.toggleClass('mainnav-lg mainnav-sm').removeClass('mainnav-in mainnav-out');
                return niftyWindow.trigger('resize');
            }
        }

        }
    )
  }
}
