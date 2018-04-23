import { Component, OnInit, Output, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  private css_classes: Map<string, string> = new Map();
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get classes() {
    return `btn ${Array.from(this.css_classes.values()).join(' ')}`;
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
