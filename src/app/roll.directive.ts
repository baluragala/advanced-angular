import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[zlRollHost]"
})
export class RollDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
