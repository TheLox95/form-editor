import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  private css_classes: Map<string, string> = new Map();

  constructor() { }

  ngOnInit() {
  }

  get classes() {
    return Array.from(this.css_classes.values()).join(' ');
  }

  setType(type) {
    this.css_classes.set('type', type);
  }

  setSize(size) {
    this.css_classes.set('size', size);
  }

  setEnabled(size) {
    this.css_classes.set('enabled', size === true ? 'enabled' : 'disabled');
  }

}
