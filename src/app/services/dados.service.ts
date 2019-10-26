import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DadosService {
  constructor(private httpService: HttpClient) {}

  newEletrecidade(eletrecidadeValue){
    return this.httpService.post("http://localhost:5000/energia/eletrica", eletrecidadeValue);
  }

  newGas(gasValue){
    return this.httpService.post("http://localhost:5000/energia/gas", gasValue);
  }

  calcularene(desempenho){
    return this.httpService.get("http://localhost:5000/createprojection/eletrica/" + desempenho);
  }

  calculargas(desempenho){
    return this.httpService.get("http://localhost:5000/createprojection/gas/" + desempenho);
  }
}
