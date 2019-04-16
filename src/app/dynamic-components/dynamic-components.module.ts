import { RollDirective } from "./roll.directive";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextComponent } from "./text.component";
import { ImageComponent } from "./image.component";
import { RollComponent } from "./roll.component";

@NgModule({
  declarations: [RollDirective, TextComponent, ImageComponent, RollComponent],
  entryComponents: [TextComponent, ImageComponent],
  exports: [RollComponent, RollDirective],
  imports: [CommonModule]
})
export class DynamicComponentsModule {}
