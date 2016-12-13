import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class MenuMediatorService {
  // Observable string sources
  private hideMenuSource = new Subject<string>();
  private showMenuSource = new Subject<string>();
  // Observable string streams
  hideMenu$ = this.hideMenuSource.asObservable();
  showMenu$ = this.showMenuSource.asObservable();
  // Service message commands
  hideMenu(mission: string) {
    this.hideMenuSource.next(mission);
  }
  showMenu(astronaut: string) {
    this.showMenuSource.next(astronaut);
  }
}
