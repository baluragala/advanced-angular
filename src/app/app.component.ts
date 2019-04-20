import { Component, OnInit } from "@angular/core";
import { RollService } from "./components/roll.service";
import { RollItem } from "./components/roll-item";

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
