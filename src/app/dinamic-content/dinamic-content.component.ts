import { TextComponent } from './../form-components/text/text.component';
import { Component, OnInit, ViewChild, ViewContainerRef, Input, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ButtonComponent } from '../form-components/button/button.component';

@Component({
  selector: 'app-dinamic-content',
  templateUrl: './dinamic-content.component.html',
  styleUrls: ['./dinamic-content.component.css']
})
export class DinamicContentComponent implements OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  _type: string;

  get type() {
    return this._type;
  }

  @Input()
  set type (value: string) {
    this._type = value;
    const componentType = this.getComponentType(this._type);
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  private mappings = {
    'button-template': ButtonComponent,
    'text-template': TextComponent,
 };

 private componentRef: ComponentRef<{}>;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
}

  getComponentType(typeName: string) {
    return this.mappings[typeName];
  }

}
