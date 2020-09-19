import { Component} from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  menu: any[] = [];
  constructor(private sidebadService: SidebarService, private userService: UserService) {
    this.menu = this.sidebadService.menu;
   }
  logout() {
    this.userService.logout();
  }
}
