import { NgModule } from "@angular/core";
import { GraficoComponent } from "./grafico.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { GoogleChartsModule } from "angular-google-charts";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule,CommonModule, BrowserModule],
  declarations: [GraficoComponent],
  exports: [GraficoComponent]
})
export class GraficotModule {}
