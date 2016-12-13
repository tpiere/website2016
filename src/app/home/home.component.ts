import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuMediatorService } from '../services/menu.mediator.service';

@Component({
	//moduleId: module.id,
	selector: 'home',
	styleUrls: ['./home.component.scss'],
	templateUrl: './home.component.html'

})

export class HomeComponent{

	constructor(private route: ActivatedRoute, private menuMediatorService: MenuMediatorService) { 
    
  }

  ngOnInit() {
    this.route.data
      //.map(data => data['cssClass'])
      .subscribe((cssClass) => {
          console.log('home component - cssClass' , cssClass);
      });

	this.menuMediatorService.hideMenu("");

  }

  ngOnDestroy(){
	  this.menuMediatorService.showMenu("");
  }
}
