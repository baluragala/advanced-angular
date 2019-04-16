import { Component, OnInit } from "@angular/core";
import { RollService } from "./roll.service";
import { RollItem } from "./roll-item";

@Component({
  selector: "zl-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  items: Array<RollItem>;
  constructor(private rollService: RollService) {}
  ngOnInit() {
    this.items = this.rollService.getItems();
  }
}
