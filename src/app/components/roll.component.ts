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
    <div>
      <h3>Rollers</h3>
      <ng-template zlRollHost></ng-template>
    </div>
  `
})
export class RollComponent implements OnInit, OnDestroy {
  @Input() items: RollItem[];
  currentRollIndex = -1;
  @ViewChild(RollDirective) rollHost: RollDirective;
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
    this.currentRollIndex = (this.currentRollIndex + 1) % this.items.length;
    const rollItem = this.items[this.currentRollIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      rollItem.component
    );

    const viewContainerRef = this.rollHost.viewContainerRef;
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
