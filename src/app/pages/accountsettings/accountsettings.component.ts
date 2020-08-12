import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styles: [
  ]
})
export class AccountsettingsComponent implements OnInit {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }
  changeTheme(color: string) {
    this.settingsService.changeTheme(color);
  }


}
