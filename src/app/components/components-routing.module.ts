import { ComponentsIndexComponent } from "./components-index.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RollComponent } from "./roll.component";
import { RollItemResolveService } from "./roll-item-resolve.service";

const routes: Routes = [
  {
    path: "components",
    children: [
      {
        path: "dynamic",
        component: RollComponent,
        resolve: { items: RollItemResolveService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
