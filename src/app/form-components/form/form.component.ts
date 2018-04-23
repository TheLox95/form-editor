import { HtmlComponentsService } from './../../html-components.service';
import { ImageComponent } from './../image/image.component';
import { ButtonComponent } from './../button/button.component';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  TemplateRef,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { NgbModal, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  @ViewChild('editor') el: ElementRef;
  htmlToExport = '';

  constructor(
    private dragula: DragulaService,
    private modalService: NgbModal,
    private _service: NotificationsService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private htmlComponentsService: HtmlComponentsService
  ) {
    dragula.setOptions('bag-task1', {
      removeOnSpill: true,
      copySortSource: true,
      copy: function(el, source) {
        return source.dataset.container !== 'editor';
      },
      accepts: function(el, container, handle) {
        return container.dataset.component === 'form-component';
      }
    });
    dragula.drop.subscribe(value => {
      value[1].addEventListener('click', () => this.openEditorModal(value[1]));
    });
  }

  ngOnInit() {}

  public openEditorModal(element): void {
    const modal = this.modalService.open(this.htmlComponentsService.get(element.dataset.component));
    modal.componentInstance.setHtmlComponent(element);
  }

  copySuccess() {
    this._service.success('Copy succeed', 'HTML Copied', {
      timeOut: 2000,
      showProgressBar: true
    });
  }

  export(content) {
    for (const element of this.el.nativeElement.children) {
      this.htmlToExport += element.outerHTML;
    }

    this.htmlToExport = `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <div class="container" style="text-align: center;">
    <div class="row">
      <div class="col">
      ${this.htmlToExport}
      </div>
      </div>
      </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>`;

    console.log(this.htmlToExport);
    this.modalService.open(content);
  }
}
