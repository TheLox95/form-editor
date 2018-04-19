import { ButtonComponent } from './form-components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TextComponent } from './form-components/text/text.component';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  entryComponents: [
    ButtonComponent,
    TextComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
