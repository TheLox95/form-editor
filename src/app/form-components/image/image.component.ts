import { Component, OnInit} from '@angular/core';
import { HtmlComponent } from '../html-component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements HtmlComponent {
  public imageProp: string;
  private _image: HTMLImageElement;
  private _url = 'http://placekitten.com/100/100';

  public setHtmlComponent(component: HTMLElement): void {
    this._image = component as HTMLImageElement;
  }

  public set url(v: string) {
    this._url = v;
    this._image.src = v;
  }


  public get url() : string {
    return this._url;
  }



}
