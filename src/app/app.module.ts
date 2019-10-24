import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GraficotModule } from "./grafico/grafico.module";
import { GoogleChartsModule } from "angular-google-charts";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraficotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
