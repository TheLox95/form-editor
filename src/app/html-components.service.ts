import { HeadingComponent } from './form-components/heading/heading.component';
import { TextComponent } from './form-components/text/text.component';
import { ButtonComponent } from './form-components/button/button.component';
import { Injectable} from '@angular/core';
import { ImageComponent } from './form-components/image/image.component';
import { HtmlComponent } from './form-components/html-component';

@Injectable()
export class HtmlComponentsService {
  private _componentsMap = new Map<string, HtmlComponent>();

  constructor() {
    this._componentsMap.set('button', ButtonComponent);
    this._componentsMap.set('image', ImageComponent);
    this._componentsMap.set('text', TextComponent);
    this._componentsMap.set('heading', HeadingComponent);
  }

  get(component: string) {
    return this._componentsMap.get(component);
  }

}
