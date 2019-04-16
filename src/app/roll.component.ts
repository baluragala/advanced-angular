import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { RollItem } from "./roll-item";
import { RollDirective } from "./roll.directive";

@Component({
  selector: "zl-roll",
  template: `
    <div class="ad-banner-example">
      <h3>Rollers</h3>
      <ng-template zlRollHost></ng-template>
    </div>
  `
})
export class RollComponent implements OnInit, OnDestroy {
  @Input() items: RollItem[];
  currentAdIndex = -1;
  @ViewChild(RollDirective) adHost: RollDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.getItems();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.items.length;
    const rollItem = this.items[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      rollItem.component
    );

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = rollItem.data;
  }

  getItems() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
