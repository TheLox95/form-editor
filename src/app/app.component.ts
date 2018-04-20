import { ButtonComponent } from './form-components/button/button.component';
import { Component } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbDropdown ]
})
export class AppComponent {
  title = 'app';
  template = 'form-template';

  constructor(config: NgbDropdown) {
    // customize default values of dropdowns used by this component tree
  }

  log(obj) {
    this.template = `${obj}-template`;
  }
}
