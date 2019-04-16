import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RollDirective } from "./roll.directive";
import { TextComponent } from "./text.component";
import { ImageComponent } from "./image.component";
import { RollComponent } from "./roll.component";

@NgModule({
  declarations: [
    AppComponent,
    RollDirective,
    TextComponent,
    ImageComponent,
    RollComponent
  ],
  entryComponents: [TextComponent, ImageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
