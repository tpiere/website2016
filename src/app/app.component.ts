import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuMediatorService } from './services/menu.mediator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuMediatorService]
})
export class AppComponent {
  constructor(private router: Router, private menuMediatorService: MenuMediatorService) {

  }
  showMenu = true;
  ngOnInit() {
    this.router.events
      //.map(data => data['cssClass'])
      .subscribe((routerEvent) => {
        console.log('app component - routerEvent', routerEvent);
        console.log('app component - routerState', this.router.routerState);
      });

    this.menuMediatorService.hideMenu$.subscribe(() => this.showMenu = false);
    this.menuMediatorService.showMenu$.subscribe(() => this.showMenu = true);
  }
}
