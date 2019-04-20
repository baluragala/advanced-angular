import { PipesModule } from "./pipes/pipes.module";
import { ComponentsModule } from "./components/components.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, PipesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
