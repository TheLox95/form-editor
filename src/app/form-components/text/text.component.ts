import { HtmlComponent } from './../html-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, HtmlComponent {

  private _text = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis nibh eu purus cursus, vitae malesuada nisi pretium.
  Phasellus nec efficitur quam. Sed ultrices interdum velit, at congue enim viverra at. In in massa non augue scelerisque
  fermentum eget sed nisl. Ut auctor elit ac mauris condimentum porttitor. Etiam quis nulla rhoncus dolor dictum
  molestie.`;
  private _textComponent: HTMLParagraphElement;

  constructor() { }

  ngOnInit() {
  }

  setHtmlComponent(component: HTMLElement): void {
    this._textComponent = component as HTMLParagraphElement;
  }


  public get text () : string {
    return this._text;
  }


  public set text(v : string) {
    this._text = v;
    this._textComponent.textContent = v;
  }



}
