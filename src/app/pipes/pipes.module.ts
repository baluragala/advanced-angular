import { PipesRoutingModule } from "./pipes-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "./filter.pipe";
import { ListComponent } from "./list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FilterPipe, ListComponent],
  imports: [CommonModule, PipesRoutingModule, FormsModule]
})
export class PipesModule {}
