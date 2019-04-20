import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { RollItem } from "./roll-item";
import { RollService } from "./roll.service";

@Injectable({
  providedIn: "root"
})
export class RollItemResolveService implements Resolve<RollItem[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): RollItem[] {
    return this.service.getItems();
  }
  constructor(private service: RollService) {}
}
