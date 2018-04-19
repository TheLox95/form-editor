import { ButtonComponent } from './../form-components/button/button.component';
import { DinamicContentComponent } from './../dinamic-content/dinamic-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    DinamicContentComponent,
    ButtonComponent
  ],
  exports: [
    CommonModule,
    NgbModule,
    DinamicContentComponent,
    ButtonComponent

  ]
})
export class SharedModule { }
