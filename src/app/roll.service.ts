import { Injectable } from "@angular/core";
import { RollItem } from "./roll-item";
import { TextComponent } from "./text.component";
import { ImageComponent } from "./image.component";

@Injectable({
  providedIn: "root"
})
export class RollService {
  constructor() {}

  getItems(): RollItem[] {
    return [
      new RollItem(TextComponent, {
        title: "Bombasto",
        subtitle: "Brave as they come"
      }),
      new RollItem(ImageComponent, {
        src: "url comes here"
      }),
      new RollItem(TextComponent, {
        title: "Bombasto 2",
        subtitle: "Brave as they come 2"
      }),
      new RollItem(ImageComponent, {
        src: "url comes here 2"
      })
    ];
  }
}
