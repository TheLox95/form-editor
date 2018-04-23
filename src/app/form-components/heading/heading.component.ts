import { HtmlComponent } from './../html-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit, HtmlComponent {

  private _heading: HTMLHeadingElement;
  private _value = 'Heading';
  private _size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';

  constructor() { }

  ngOnInit() {
  }

  setHtmlComponent(component: HTMLElement): void {
   this._heading = component as HTMLHeadingElement;
  }


  public set value(v: string) {
    this._value = v;
    this._heading.textContent = v;
  }


  public get value(): string {
    return this._value;
  }


  public get size(): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' {
    return this._size;
  }


  public set size(v: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') {
    this._size = v;
    this._heading.className = v;
  }

}
