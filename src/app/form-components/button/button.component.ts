import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HtmlComponent } from '../html-component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, HtmlComponent {

  private css_classes: Map<string, string> = new Map();
  private _htmlComponent: HTMLElement;
  public _text = 'Button';
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setHtmlComponent(component: HTMLElement): void {
    this._htmlComponent = component;
    this.change.subscribe(htmlClass => {
      console.log(this._htmlComponent);
      this._htmlComponent.className = htmlClass;
      this._htmlComponent.textContent = this._text;
    });
  }

  get classes() {
    return `btn ${Array.from(this.css_classes.values()).join(' ')}`;
  }


  public get text(): string {
    return this._text;
  }

  public set text(v: string) {
    this._text = v;
    this.change.emit(this.classes);
  }



  setType(type) {
    this.css_classes.set('type', type);
    this.change.emit(this.classes);
  }

  setSize(size) {
    this.css_classes.set('size', size);
    this.change.emit(this.classes);
  }

  setEnabled(size) {
    this.css_classes.set('enabled', size === true ? 'enabled' : 'disabled');
    this.change.emit(this.classes);
  }

}
