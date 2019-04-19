import { ComponentsIndexComponent } from "./components-index.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RollComponent } from "./roll.component";

const routes: Routes = [
  {
    path: "components",
    component: ComponentsIndexComponent,
    children: [{ path: "components/dynamic", component: RollComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
