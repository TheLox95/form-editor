import { FormComponent } from './form-components/form/form.component';
import { ButtonComponent } from './form-components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TextComponent } from './form-components/text/text.component';
import { ImageComponent } from './form-components/image/image.component';
import { HtmlComponentsService } from './html-components.service';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    FormComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  entryComponents: [
    ButtonComponent,
    TextComponent,
    FormComponent,
    ImageComponent
  ],
  providers: [HtmlComponentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
