import { Component, OnInit } from "@angular/core";
import { DadosService } from "../services/dados.service";

@Component({
  selector: "app-grafico",
  templateUrl: "./grafico.component.html",
  styleUrls: ["./grafico.component.scss"]
})
export class GraficoComponent implements OnInit {
  src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8UQ8AAnUBeRHU5C8AAAAASUVORK5CYII=";
  desempenho = 0;
  valorresultado = 0;
  gasouenergia = "";

  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = [
    { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
    { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
    { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
    { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
    { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
    { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
    { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
  ];
  constructor(private dadosService: DadosService) {}

  calcularene(){
    this.dadosService.calcularene(this.desempenho).subscribe(
      dados => {
        console.log(dados)
        this.gasouenergia = " kWh";
        this.valorresultado = dados['valorresultado'].toFixed(2)
        this.src = "data:image/png;base64," + dados['base64'];
      },
      err => {
        console.log(err);
      }
    );
  }

  calculargas(){
    this.dadosService.calculargas(this.desempenho).subscribe(
      dados => {
        console.log(dados)
        this.gasouenergia = " Nm³ GN/t vapor prod";
        this.valorresultado = dados['valorresultado'].toFixed(2)
        this.src = "data:image/png;base64," + dados['base64'];
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }
}
