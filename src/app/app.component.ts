import {AfterViewInit, Component} from '@angular/core';

import jQuery from 'jQuery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';

  ngAfterViewInit(): void {
    // tslint:disable-next-line:only-arrow-functions
    (function($): void {
      'use strict';

      // Add active state to sidbar nav links
      const path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function(): void {
        if (this.href === path) {
          $(this).addClass('active');
        }
      });

      // Toggle the side navigation
      // tslint:disable-next-line:only-arrow-functions
      $('#sidebarToggle').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }

}
