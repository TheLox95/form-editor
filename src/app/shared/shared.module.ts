import { ButtonComponent } from './../form-components/button/button.component';
import { DinamicContentComponent } from './../dinamic-content/dinamic-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { ClipboardModule } from 'ngx-clipboard';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    DragulaModule,
    ClipboardModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    DinamicContentComponent,
    ButtonComponent
  ],
  exports: [
    CommonModule,
    NgbModule,
    DinamicContentComponent,
    ButtonComponent,
    DragulaModule,
    ClipboardModule,
    SimpleNotificationsModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
