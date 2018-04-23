import { Component, OnInit} from '@angular/core';
import { HtmlComponent } from '../html-component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, HtmlComponent {
  public imageProp: string;

  constructor() { }

  ngOnInit() {
  }

  setHtmlComponent(component: HTMLElement): void {
  }

}
