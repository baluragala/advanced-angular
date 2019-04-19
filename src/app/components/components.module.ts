import { RollDirective } from "./roll.directive";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextComponent } from "./text.component";
import { ImageComponent } from "./image.component";
import { RollComponent } from "./roll.component";
import { ComponentsRoutingModule } from "./components-routing.module";
import { ComponentsIndexComponent } from "./components-index.component";

@NgModule({
  declarations: [
    RollDirective,
    TextComponent,
    ImageComponent,
    RollComponent,
    ComponentsIndexComponent
  ],
  entryComponents: [TextComponent, ImageComponent],
  exports: [ComponentsIndexComponent],
  imports: [CommonModule, ComponentsRoutingModule]
})
export class ComponentsModule {}
