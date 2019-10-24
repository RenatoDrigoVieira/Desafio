import { NgModule } from "@angular/core";
import { GraficoComponent } from "./grafico.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { GoogleChartsModule } from "angular-google-charts";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  imports: [MatToolbarModule, GoogleChartsModule, MatTableModule],
  declarations: [GraficoComponent],
  exports: [GraficoComponent]
})
export class GraficotModule {}
